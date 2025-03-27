import type { ActionOptions, SwaggerResponse } from '@johnsonhuang4396/api-smasher'
import type { IncomingMessage, ServerResponse } from 'node:http'
import type { ViteDevServer } from 'vite'
import type { VitePluginApiSmasherOptions } from '../index'
import { createGeneratorContext, extractAvailablePaths, fetchSwaggerDocs, generateApiFiles, getGeneratorContext, validateSelectedPaths } from '@johnsonhuang4396/api-smasher'

function setResultHeader(res: ServerResponse<IncomingMessage>) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
}

export function createServer(server: ViteDevServer, options: VitePluginApiSmasherOptions) {
  const { config } = server
  const base = config.base ?? '/'
  let docs: SwaggerResponse[] | null = null

  createGeneratorContext(options)

  server.middlewares.use(`${base}api-smasher/swagger`, async (req, res) => {
    setResultHeader(res)

    if (!docs) {
      docs = await fetchSwaggerDocs(options.config)
      getGeneratorContext().responses = docs
    }

    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ success: true, docs }))
  })

  server.middlewares.use(`${base}api-smasher/refresh-swagger`, async (req, res) => {
    setResultHeader(res)

    docs = await fetchSwaggerDocs(options.config)
    getGeneratorContext().responses = docs

    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ success: true, docs }))
  })

  server.middlewares.use(`${base}api-smasher/templates`, async (req, res) => {
    setResultHeader(res)

    const { templates: docs } = getGeneratorContext()

    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ success: true, docs }))
  })

  server.middlewares.use(`${base}api-smasher/generate`, async (req, res) => {
    setResultHeader(res)

    if (req.method === 'OPTIONS') {
      res.writeHead(200)
      res.end()
      return
    }

    const body = await new Promise<string>((resolve) => {
      let data = ''
      req.on('data', (chunk) => { data += chunk })
      req.on('end', () => resolve(data))
    })

    const {
      outputDir = './src/api',
      selectedPaths = [],
      generateConfig
    } = JSON.parse(body) as Omit<ActionOptions, 'config' | 'autoRun'>

    const { responses } = getGeneratorContext()

    const availablePaths = extractAvailablePaths(responses)

    const validPaths = validateSelectedPaths(selectedPaths, availablePaths)

    const pathDetails = availablePaths.filter(info => validPaths.includes(info.path))

    await generateApiFiles({
      outputDir,
      pathDetails,
      responses,
      generateConfig: generateConfig!
    })

    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ success: true }))
  })

  server.middlewares.use(`${base}api-smasher/dir`, async () => {

  })
}
