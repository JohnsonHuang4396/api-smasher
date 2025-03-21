import apiSmasher from '@johnsonhuang4396/vite-plugin-api-smasher'
import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 3000
  },
  plugins: [
    apiSmasher({
      config: 'http://192.168.100.125:18083/v3/api-docs',
      outputDir: './'
    })
  ]
})
