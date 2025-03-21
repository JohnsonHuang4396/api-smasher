import type { SwaggerConfig, SwaggerDocument, SwaggerEndpoint, SwaggerResponse } from './types'

export async function fetchSwaggerDocs(config: SwaggerConfig): Promise<SwaggerResponse[]> {
  const endpoints = normalizeConfig(config)
  const responses: SwaggerResponse[] = []

  for (const endpoint of endpoints) {
    try {
      const response = await fetchEndpoint(endpoint)
      responses.push(response)
    }
    catch (error) {
      if (error instanceof Error) {
        throw new TypeError(`❌ Failed to fetch swagger doc from ${endpoint.remote}: ${error.message}`)
      }
      throw error
    }
  }

  return responses
}

function normalizeConfig(config: SwaggerConfig): SwaggerEndpoint[] {
  if (typeof config === 'string') {
    return [{ remote: config }]
  }

  if (Array.isArray(config)) {
    return config.map(item =>
      typeof item === 'string' ? { remote: item } : item
    )
  }

  return [config]
}

async function fetchEndpoint(endpoint: SwaggerEndpoint): Promise<SwaggerResponse> {
  const { remote, header, response: responseHandler } = endpoint

  const fetchOptions: RequestInit = {
    headers: header
  }

  const fetchResponse = await fetch(remote, fetchOptions)

  if (!fetchResponse.ok) {
    throw new Error(`❌ HTTP error! status: ${fetchResponse.status}`)
  }

  const data = (await fetchResponse.json()) as SwaggerDocument

  if (responseHandler) {
    return await responseHandler(data)
  }

  return {
    remote,
    name: extractNameFromRemote(remote),
    paths: data.paths,
    components: data.components
  }
}

function extractNameFromRemote(remote: string): string {
  try {
    const url = new URL(remote)
    return url.hostname.split('.')[0]
  }
  catch {
    return remote.split('/').pop() || remote
  }
}
