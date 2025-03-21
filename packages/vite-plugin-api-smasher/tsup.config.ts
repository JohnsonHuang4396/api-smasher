import { defineConfig } from 'tsup'

export default defineConfig({
  entry: [
    'src/**/*.ts'
  ],
  bundle: false,
  splitting: true,
  format: 'esm',
  dts: true,
  clean: true,
  treeshake: true
})
