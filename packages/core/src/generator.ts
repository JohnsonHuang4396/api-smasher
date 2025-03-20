import type { SwaggerResponse } from './types'
import { appendFileSync, existsSync, mkdirSync, writeFileSync } from 'node:fs'
import { cwd } from 'node:process'
import { normalize, resolve } from 'pathe'

interface GeneratorOptions {
  outputDir: string
  pathDetails: {
    method: string
    path: string
    operationId?: string
  }[]
  responses: SwaggerResponse[]
}

function generateFiles(outputDir: string, path: string, content: string): void {
  if (existsSync(path)) {
    appendFileSync(path, `\n${content}`)
  }
  else {
    mkdirSync(outputDir, { recursive: true })
    writeFileSync(path, content)
  }
}

export function generateApiFiles({ outputDir, pathDetails, responses }: GeneratorOptions): void {
  const basePath = normalize(resolve(cwd(), outputDir))
  const apiPath = normalize(resolve(basePath, 'Api.ts'))
  const modelPath = normalize(resolve(basePath, 'Model.ts'))

  // 生成 API 文件
  const apiContent = generateApiContent(pathDetails)
  generateFiles(outputDir, apiPath, apiContent)

  // 生成 Model 文件
  const modelContent = generateModelContent(responses)
  generateFiles(outputDir, modelPath, modelContent)
}

function generateApiContent(pathDetails: GeneratorOptions['pathDetails']): string {
  return pathDetails.map((detail) => {
    const functionName = detail.operationId || getFunctionName(detail.path)
    const method = detail.method.toLowerCase()

    return `
export async function ${functionName}(params: any) {
  return await fetch('${detail.path}', {
    method: '${method}',
    headers: {
      'Content-Type': 'application/json'
    },
    body: ${method !== 'get' ? 'JSON.stringify(params)' : 'undefined'}
  }).then(res => res.json())
}
`
  }).join('\n')
}

function generateModelContent(responses: SwaggerResponse[]): string {
  // 从responses中提取所有需要的类型定义
  const schemas = responses.flatMap(response =>
    Object.entries(response.components?.schemas || {})
  )

  return schemas.map(([name, schema]) => {
    return `
export interface ${name} {
${generateTypeProperties(schema)}
}
`
  }).join('\n')
}

function getFunctionName(path: string): string {
  const parts = path.split('/')
  return parts[parts.length - 1] || 'api'
}

function getTypeFromSchema(prop: any): string {
  if (prop.$ref) {
    return prop.$ref.split('/').pop()
  }

  switch (prop.type) {
    case 'string':
      return 'string'
    case 'integer':
    case 'number':
      return 'number'
    case 'boolean':
      return 'boolean'
    case 'array':
      return `${getTypeFromSchema(prop.items)}[]`
    case 'object':
      return 'Record<string, any>'
    default:
      return 'any'
  }
}

function getPropertyDefinition(name: string, type: string, optional: string): string {
  let extra = ''
  if (name.toLowerCase().endsWith('id')) {
    extra = `_${name}${optional}: ${type};`
  }
  return `${name}${optional}: ${type};\n${extra}`
}

function generateTypeProperties(schema: any): string {
  if (!schema.properties)
    return ''

  return Object.entries(schema.properties)
    .map(([name, prop]: [string, any]) => {
      const type = getTypeFromSchema(prop)
      const optional = schema.required?.includes(name) ? '' : '?'
      const description = prop.description || name
      return `
  /**
  * ${description}
  */
  ${getPropertyDefinition(name, type, optional)}`
    })
    .join('\n')
}
