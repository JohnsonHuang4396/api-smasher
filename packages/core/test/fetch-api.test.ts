import type { Mock } from 'vitest'
import type { SwaggerResponse } from '../src/types'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { fetchSwaggerDocs } from '../src/fetch-api'

const MOCK_SWAGGER_URL = 'http://192.168.100.125:18083/v3/api-docs'
const MOCK_SWAGGER_RESPONSE = {
  paths: {
    '/test': {
      get: {
        summary: 'Test endpoint',
        operationId: 'testEndpoint'
      }
    }
  },
  components: {
    schemas: {
      TestSchema: {
        type: 'object'
      }
    }
  }
}

describe('fetchSwaggerDocs', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    globalThis.fetch = vi.fn()
  })

  it('should fetch swagger docs from a single URL', async () => {
    const mockFetch = globalThis.fetch as Mock
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(MOCK_SWAGGER_RESPONSE)
    })

    const result = await fetchSwaggerDocs(MOCK_SWAGGER_URL)

    expect(mockFetch).toHaveBeenCalledWith(MOCK_SWAGGER_URL, { headers: undefined })
    expect(result).toHaveLength(1)
    expect(result[0]).toHaveProperty('remote', MOCK_SWAGGER_URL)
    expect(result[0]).toHaveProperty('name', '192')
    expect(result[0]).toHaveProperty('paths', expect.any(Object))
    expect(result[0]).toHaveProperty('components', expect.any(Object))
  })

  it('should fetch swagger docs from multiple URLs', async () => {
    const mockFetch = globalThis.fetch as Mock
    mockFetch
      .mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(MOCK_SWAGGER_RESPONSE)
      })
      .mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(MOCK_SWAGGER_RESPONSE)
      })

    const urls = [MOCK_SWAGGER_URL, 'http://another-api.com/swagger']
    const result = await fetchSwaggerDocs(urls)

    expect(mockFetch).toHaveBeenCalledTimes(2)
    expect(result).toHaveLength(2)
  })

  it('should handle custom headers', async () => {
    const mockFetch = globalThis.fetch as Mock
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(MOCK_SWAGGER_RESPONSE)
    })

    const customHeaders = { Authorization: 'Bearer token' }
    await fetchSwaggerDocs({
      remote: MOCK_SWAGGER_URL,
      header: customHeaders
    })

    expect(mockFetch).toHaveBeenCalledWith(MOCK_SWAGGER_URL, {
      headers: customHeaders
    })
  })

  it('should use custom response handler when provided', async () => {
    const mockFetch = globalThis.fetch as Mock
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(MOCK_SWAGGER_RESPONSE)
    })

    const customResponse: SwaggerResponse = {
      remote: MOCK_SWAGGER_URL,
      name: 'custom-name',
      paths: {},
      components: {
        schemas: {}
      }
    }

    const result = await fetchSwaggerDocs({
      remote: MOCK_SWAGGER_URL,
      response: async () => customResponse
    })

    expect(result[0]).toEqual(customResponse)
  })

  it('should throw error for failed requests', async () => {
    const mockFetch = globalThis.fetch as Mock
    mockFetch.mockResolvedValueOnce({
      ok: false,
      status: 404
    })

    await expect(fetchSwaggerDocs(MOCK_SWAGGER_URL))
      .rejects
      .toThrow('Failed to fetch swagger doc')
  })

  it('should handle network errors', async () => {
    const mockFetch = globalThis.fetch as Mock
    mockFetch.mockRejectedValueOnce(new Error('Network error'))

    await expect(fetchSwaggerDocs(MOCK_SWAGGER_URL))
      .rejects
      .toThrow('Network error')
  })
})
