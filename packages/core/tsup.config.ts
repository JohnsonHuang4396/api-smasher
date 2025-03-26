import { execSync } from 'node:child_process'
import { defineConfig } from 'tsup'

export default defineConfig({
  entry: [
    'src/index.ts'
  ],
  splitting: true,
  format: 'esm',
  dts: true,
  clean: true,
  treeshake: true,
  async onSuccess() {
    execSync('cp -r ./src/template ./dist')
  }
})
