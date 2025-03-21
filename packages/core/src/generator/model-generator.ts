import type { SwaggerResponse } from '../types'

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

export function generateModelContent(responses: SwaggerResponse[]): string {
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
