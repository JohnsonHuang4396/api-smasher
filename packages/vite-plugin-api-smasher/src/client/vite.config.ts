import { join, resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import VueRouter from 'unplugin-vue-router/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@': '/src/client',
      '~': __dirname
    }
  },
  plugins: [
    Unocss(),
    VueRouter({
      root: __dirname,
      routesFolder: 'pages'
    }),
    vue(),
    AutoImport({
      dts: join(__dirname, 'auto-imports.d.ts'),
      imports: [
        'vue',
        VueRouterAutoImports,
        '@vueuse/core',
        {
          'naive-ui': [
            'useMessage',
            'useLoadingBar'
          ]
        }
      ],
      packagePresets: [
        '@tanstack/vue-query'
      ]
    }),
    Components({
      dts: join(__dirname, 'components.d.ts'),
      dirs: ['components'],
      resolvers: [NaiveUiResolver()]
    })
  ],
  optimizeDeps: {
    exclude: [
      'vite-hot-client',
      'diff-match-patch-es'
    ]
  },

  future: {
    removePluginHookHandleHotUpdate: 'warn',
    removePluginHookSsrArgument: 'warn',
    removeServerModuleGraph: 'warn',
    removeServerHot: 'warn',
    removeServerTransformRequest: 'warn',
    removeSsrLoadModule: 'warn'
  },

  build: {
    target: 'esnext',
    outDir: resolve(__dirname, '../../dist/client'),
    minify: false,
    emptyOutDir: true
  }
})
