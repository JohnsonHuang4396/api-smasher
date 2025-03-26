import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/index'
  ],
  clean: true,
  declaration: 'compatible',
  externals: [
    'vite'
  ],
  rollup: {
    dts: {
      respectExternal: true
    }
  }
})
