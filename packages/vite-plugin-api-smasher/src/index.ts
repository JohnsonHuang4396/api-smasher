import type { PromptActionOptions } from '@johnsonhuang4396/api-smasher'
import type { Plugin } from 'vite'
import c from 'ansis'
import sirv from 'sirv'
import { DIR_CLIENT } from './dir'
import { createServer } from './node/server'

export interface VitePluginApiSmasherOptions extends PromptActionOptions {
}

export default function ApiSmasher(options: VitePluginApiSmasherOptions): Plugin {
  return {
    name: 'vite-plugin-api-smasher',
    apply: 'serve',
    configureServer(vite) {
      const { config } = vite
      const base = config.base ?? '/'

      createServer(vite, options)

      vite.middlewares.use(`${base}__api-smasher`, sirv(DIR_CLIENT, {
        single: true,
        dev: true
      }))

      const _printUrls = vite.printUrls
      vite.printUrls = () => {
        let host = `${config.server.https ? 'https' : 'http'}://localhost:${config.server.port || '80'}`

        const url = vite.resolvedUrls?.local[0]

        if (url) {
          try {
            const u = new URL(url)
            host = `${u.protocol}//${u.host}`
          }
          catch (error) {
            config.logger.warn(`Parse resolved url failed: ${error}`)
          }
        }

        _printUrls()

        const colorUrl = (url: string) => c.blue(url.replace(/:(\d+)\//, (_, port) => `:${c.bold(port)}/`))

        config.logger.info(`  ${c.blue('➜')}  ${c.bold('Api-Smasher')}: ${colorUrl(`${host}${base}__api-smasher/`)}`)
      }
    }
  }
}
