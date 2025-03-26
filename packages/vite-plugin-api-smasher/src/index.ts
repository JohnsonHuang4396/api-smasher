import type { PromptActionOptions } from '@johnsonhuang4396/api-smasher'
import type { Plugin } from 'vite'
import { resolve } from 'node:path'
import { createServer } from './server'

export interface VitePluginApiSmasherOptions extends PromptActionOptions {
  /**
   * 启动端口，默认为8848
   */
  port?: string
}

export default function ApiSmasher(options: VitePluginApiSmasherOptions): Plugin {
  const port = options.port || '8848'
  let server: ReturnType<typeof createServer>

  return {
    name: 'vite-plugin-api-smasher',
    apply: 'serve',
    configureServer(vite) {
      // 启动 API Smasher 服务器
      server = createServer(options)
      server.listen(Number.parseInt(port))
      vite.resolvedUrls = {
        local: [`http://localhost:${port}`],
        network: []
      }

      // 注册静态资源路由
      vite.middlewares.use('/api-smasher', (req, res, next) => {
        if (req.url === '/') {
          res.setHeader('Content-Type', 'text/html')
          res.end(
            `<!DOCTYPE html>
            <html>
              <head>
                <title>API Smasher</title>
                <script type="module" src="/api-smasher/client.js"></script>
              </head>
              <body>
                <div id="app"></div>
              </body>
            </html>`
          )
          return
        }
        next()
      })
    },
    configurePreviewServer(preview) {
      preview.middlewares.use('/api-smasher', (req, res, next) => {
        if (req.url === '/') {
          res.setHeader('Content-Type', 'text/html')
          res.end(
            `<!DOCTYPE html>
            <html>
              <head>
                <title>API Smasher</title>
                <script type="module" src="/api-smasher/client.js"></script>
              </head>
              <body>
                <div id="app"></div>
              </body>
            </html>`
          )
          return
        }
        next()
      })
    },
    resolveId(id) {
      if (id === '/api-smasher/client.js') {
        return resolve(__dirname, 'client.js')
      }
    },
    closeBundle() {
      if (server) {
        server.close()
      }
    }
  }
}
