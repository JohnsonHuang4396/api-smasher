import { copy } from 'fs-extra'
import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/index'
  ],
  clean: true,
  declaration: 'compatible',
  failOnWarn: false,
  rollup: {
    dts: {
      respectExternal: true
    }
  },
  hooks: {
    'build:done': async () => {
      await copy('src/template', 'dist/template')
    }
  }
})
