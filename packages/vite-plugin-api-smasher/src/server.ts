import type { VitePluginApiSmasherOptions } from '.'
import { createServer as createHttpServer } from 'node:http'
import { generateApi } from '@johnsonhuang4396/api-smasher'

export function createServer(options: VitePluginApiSmasherOptions) {
  const server = createHttpServer(async (req, res) => {
    // 处理 CORS
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

    if (req.method === 'OPTIONS') {
      res.writeHead(200)
      res.end()
      return
    }

    if (req.method === 'POST' && req.url === '/generate') {
      try {
        const body = await new Promise<string>((resolve) => {
          let data = ''
          req.on('data', (chunk) => { data += chunk })
          req.on('end', () => resolve(data))
        })

        const config = JSON.parse(body)
        await generateApi({
          ...options,
          ...config,
          autoRun: true
        })

        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ success: true }))
      }
      catch (error) {
        res.writeHead(500, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({
          success: false,
          error: error instanceof Error ? error.message : String(error)
        }))
      }
    }
    else {
      res.writeHead(404)
      res.end()
    }
  })

  return server
}
