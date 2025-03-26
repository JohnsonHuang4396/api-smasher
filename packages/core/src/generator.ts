import type { ActionOptions } from './action'
import type { SwaggerPathDefinition, SwaggerResponse, SwaggerSchemaDefinition } from './types'
import { appendFileSync, existsSync, mkdirSync, writeFileSync } from 'node:fs'
import { cwd } from 'node:process'
import { renderFile } from 'ejs'
import { dirname, join, normalize, resolve } from 'pathe'
import { DEFAULT_API_OUTPUT_DIR, DEFAULT_MODEL_OUTPUT_DIR, DEFAULT_WEB_REQUEST_TEMPLATE_PATH } from './config'

export interface GeneratorOptions {
  outputDir: string
  pathDetails: {
    method: string
    path: string
    raw: SwaggerPathDefinition
    operationId?: string
    summary?: string
  }[]
  responses: SwaggerResponse[]
  generateConfig: ActionOptions['generateConfig'] & ApiGeneratorOptions
}

function generateFile(outputDir: string, path: string, content: string): void {
  if (existsSync(path)) {
    appendFileSync(path, `\n\n${content}`)
  }
  else {
    mkdirSync(outputDir, { recursive: true })
    writeFileSync(path, content)
  }
}

export async function generateApiFiles({
  outputDir,
  pathDetails,
  responses,
  generateConfig
}: GeneratorOptions): Promise<void> {
  const { api, model } = generateConfig
  const basePath = resolve(cwd(), normalize(outputDir))
  const apiPath = resolve(normalize(basePath), api?.outputDir || DEFAULT_API_OUTPUT_DIR)
  const modelPath = resolve(normalize(basePath), model?.outputDir || DEFAULT_MODEL_OUTPUT_DIR)

  if (api?.enable !== false) {
    const apiContent = await generateApiContent(pathDetails, generateConfig)
    generateFile(outputDir, apiPath, apiContent)
  }

  if (model?.enable !== false) {
    const modelContent = generateModelContent(pathDetails, responses)
    generateFile(outputDir, modelPath, modelContent)
  }
}

export interface ApiGeneratorOptions {
  /**
   * 模板路径，默认使用内置的 web-fetch 模板
   */
  template?: string
}

export async function generateApiContent(
  pathDetails: GeneratorOptions['pathDetails'],
  options: ApiGeneratorOptions = {}
): Promise<string> {
  try {
    const templatePath = normalize(
      options.template || join(dirname(import.meta.url), DEFAULT_WEB_REQUEST_TEMPLATE_PATH)
    ).replace('file:', '')

    const result = await renderFile(templatePath, {
      pathDetails
    }, {
      async: true
    })

    return result.trim()
  }
  catch (error) {
    if (error instanceof Error) {
      throw new TypeError(`Failed to generate API content: ${error.message}`)
    }
    throw error
  }
}

function getTypeFromSchema(prop: any): string {
  if (prop.$ref) {
    return prop.$ref?.split('/')?.pop() ?? 'any'
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

export function getParamType(parameters: any, result: string[]): string[] {
  if (!parameters || !parameters.length)
    return result
  if (parameters[0]?.schema?.$ref)
    result.push(parameters[0].schema.$ref.split('/').pop())
  return result
}

export function getBodyType(method: any, result: string[]): string[] {
  const schema = method?.requestBody?.content?.['application/json']?.schema
  if (!schema)
    return result
  if (schema.$ref)
    result.push(schema.$ref.split('/').pop())
  return result
}

function getResponseType(method: any, result: string[]): string[] {
  const schema = method?.responses?.['200']?.content?.['*/*']?.schema
  if (!schema || !schema.$ref)
    return result
  result.push(schema.$ref.split('/').pop())
  return result
}

function getPropertyDefinition(
  name: string,
  type: string,
  optional: string
): string {
  let extra = ''
  const isId = name.toLowerCase().endsWith('id')
  type = isId ? 'string' : type
  if (isId) {
    extra = `_${name}${optional}: ${type};`
  }
  return `${name}${optional}: ${type};\n${extra}`
}

export function generateTypeProperties(schema: any): string {
  if (!schema.properties)
    return ''

  return Object.entries(schema.properties)
    .map(([name, prop]: [string, any]) => {
      const type = getTypeFromSchema(prop)
      const optional = schema.required?.includes(name) ? '' : '?'
      const description = prop.description || name
      return `/**
* ${description}
*/
${getPropertyDefinition(name, type, optional)}`
    })
    .join('\n')
}

export function recursiveSchema(flatSchema: [string, SwaggerSchemaDefinition][], typeList: string[]): string[] {
  const result: string[] = []
  const schemaList = flatSchema.filter(([name]) => typeList.includes(name))
  for (let index = 0; index < schemaList.length; index++) {
    const { properties } = schemaList[index][1]
    const filteredProperties = Object.entries(properties ?? {}).filter(([, val]) => (val as any)?.$ref || val.type === 'array')
    if (!filteredProperties.length)
      continue

    for (const [, element] of filteredProperties) {
      if ((element as any)?.$ref) {
        const key = (element as any)?.$ref?.split('/')?.pop()
        result.push(...recursiveSchema(flatSchema, [key]))
        continue
      }
      if (element.type === 'array') {
        const key = (element as any)?.items?.$ref?.split('/')?.pop()
        result.push(...recursiveSchema(flatSchema, [key]))
        continue
      }
    }
  }
  return [...new Set([...result, ...typeList])]
}

export function generateModelContent(pathDetails: GeneratorOptions['pathDetails'], responses: SwaggerResponse[]): string {
  const typeList1 = pathDetails.reduce<string[]>((acc, detail) => {
    const methodInfo = detail.raw
    const responseType = getResponseType(methodInfo, [])
    if (responseType) {
      acc.push(...responseType)
    }
    const bodyType = getBodyType(methodInfo, [])
    if (bodyType) {
      acc.push(...bodyType)
    }
    const paramType = getParamType(methodInfo.parameters, [])
    if (paramType) {
      acc.push(...paramType)
    }
    return acc
  }, [])

  const flatSchemas = responses
    .flatMap(response =>
      Object.entries(response.components?.schemas || {})
    )

  const typeList2 = recursiveSchema(flatSchemas, [...new Set(typeList1)])

  return flatSchemas
    .filter(([name]) => typeList2.includes(name))
    .map(([name, schema]) => {
      return `
export interface ${name} {
${generateTypeProperties(schema)}
}
`
    })
    .join('\n')
}
