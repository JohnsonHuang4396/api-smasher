import { defineConfig } from 'tsup'

export default defineConfig({
  entry: [
    './src/index.ts'
  ],
  splitting: true,
  sourcemap: true,
  format: 'esm',
  dts: true,
  clean: true,
  treeshake: true
})
