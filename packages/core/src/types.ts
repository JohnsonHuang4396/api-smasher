export interface SwaggerEndpoint {
  remote: string
  header?: Record<string, string>
  response?: (data: SwaggerDocument) => Promise<SwaggerResponse>
}

export type SwaggerConfig = string | string[] | SwaggerEndpoint | SwaggerEndpoint[]

export interface SwaggerResponse {
  remote: string
  name: string
  paths: SwaggerEndpointDefinition
  components: SwaggerComponentsDefinition
}

export interface SwaggerEndpointDefinition {
  [key: string]: SwaggerPathDefinition
}

export interface SwaggerDocument {
  openapi: string
  info: {
    title: string
    version: string
  }
  servers: Array<{
    url: string
    description: string
  }>
  paths: Record<string, SwaggerPathDefinition>
  components: SwaggerComponentsDefinition
}

export interface SwaggerPathDefinition {
  [method: string]: {
    tags: string[]
    summary?: string
    operationId?: string
    parameters?: SwaggerParameterDefinition[]
    requestBody?: SwaggerRequestBodyDefinition
    responses: SwaggerResponsesDefinition
  }
}

export interface SwaggerParameterDefinition {
  name: string
  in: string
  required: boolean
  schema: SwaggerSchemaDefinition | {
    $ref: string
  }
}

export interface SwaggerRequestBodyDefinition {
  content: {
    'application/json': {
      schema: {
        $ref: string
      }
    }
  }
  required?: boolean
}

export interface SwaggerResponsesDefinition {
  [code: string]: {
    description: string
    content?: {
      '*/*': {
        schema: SwaggerSchemaDefinition | {
          $ref: string
        }
      }
    }
  }
}

export interface SwaggerComponentsDefinition {
  schemas: Record<string, SwaggerSchemaDefinition>
}

export interface SwaggerSchemaDefinition {
  type: string
  description?: string
  properties?: Record<string, {
    type: string
    description?: string
    format?: string
    items?: SwaggerSchemaDefinition | {
      $ref: string
    }
  }>
  required?: string[]
}
