import type { SwaggerResponse } from '../src/types'
import { describe, expect, it } from 'vitest'
import { fetchSwaggerDocs } from '../src/fetch-api'

const REAL_SWAGGER_URL = 'http://192.168.100.125:18083/v3/api-docs'

describe('integration Tests', () => {
  it('should fetch real swagger docs and match snapshot', async () => {
    const result = await fetchSwaggerDocs(REAL_SWAGGER_URL)

    expect(result).toHaveLength(1)
    const response = result[0]

    expect(response).toHaveProperty('remote', REAL_SWAGGER_URL)
    expect(response).toHaveProperty('name', '192')
    expect(response).toHaveProperty('paths')
    expect(response).toHaveProperty('components')

    expect(response.paths).toMatchSnapshot('raw-swagger-response')

    const processedData = {
      paths: Object.keys(response.paths || {}),
      components: Object.keys(response.components?.schemas || {})
    }
    expect(processedData).toMatchSnapshot('processed-swagger-data')
  })

  it('should handle custom response transformation and match snapshot', async () => {
    const customResponse = async (data: any): Promise<SwaggerResponse> => ({
      remote: REAL_SWAGGER_URL,
      name: 'custom-api',
      paths: data.paths,
      components: data.components
    })

    const result = await fetchSwaggerDocs({
      remote: REAL_SWAGGER_URL,
      response: customResponse
    })

    expect(result).toHaveLength(1)
    const response = result[0]

    expect(response).toHaveProperty('remote', REAL_SWAGGER_URL)
    expect(response).toHaveProperty('name', 'custom-api')

    expect(response.paths).toMatchSnapshot('custom-processed-data')
  })

  it('should fetch multiple swagger endpoints and match snapshots', async () => {
    const endpoints = [
      {
        remote: REAL_SWAGGER_URL,
        response: async (data: any): Promise<SwaggerResponse> => ({
          remote: REAL_SWAGGER_URL,
          name: 'api-1',
          paths: data.paths,
          components: data.components?.schemas
        })
      },
      {
        remote: REAL_SWAGGER_URL,
        response: async (data: any): Promise<SwaggerResponse> => ({
          remote: REAL_SWAGGER_URL,
          name: 'api-2',
          paths: data.paths,
          components: data.components?.schemas
        })
      }
    ]

    const result = await fetchSwaggerDocs(endpoints)

    expect(result).toHaveLength(2)
    expect(result[0].name).toBe('api-1')
    expect(result[1].name).toBe('api-2')

    result.forEach((response, index) => {
      expect(response.paths).toMatchSnapshot(`endpoint-${index + 1}-processed`)
    })
  })

  it('should handle request errors gracefully', async () => {
    const invalidUrl = 'http://invalid-url.example.com/swagger'

    await expect(fetchSwaggerDocs(invalidUrl))
      .rejects
      .toThrow('Failed to fetch swagger doc')
  })
})
