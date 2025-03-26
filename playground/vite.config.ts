import apiSmasher from '@johnsonhuang4396/vite-plugin-api-smasher'
import { defineConfig } from 'vite'
import Inspect from 'vite-plugin-inspect'

export default defineConfig({
  server: {
    port: 3000
  },
  plugins: [
    Inspect(),
    apiSmasher({
      config: 'http://192.168.100.125:18083/v3/api-docs',
      outputDir: './'
    })
  ]
})
