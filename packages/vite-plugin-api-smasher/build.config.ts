import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/index'
  ],
  clean: true,
  declaration: 'compatible',
  externals: [
    'vite',
    'ansis',
    'sirv'
  ],
  rollup: {
    dts: {
      respectExternal: true
    }
  }
})
