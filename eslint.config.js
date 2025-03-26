// @ts-check
import antfu from '@antfu/eslint-config'

export default antfu(
  {
    type: 'lib',
    stylistic: {
      quotes: 'single',
      semi: false,
      indent: 2,
      overrides: {
        'style/comma-dangle': ['error', 'never']
      }
    },
    ignores: [
      'packages/core/test/__snapshots__/*',
      'packages/core/test/test-output/*',
      'packages/vite-plugin-api-smasher/*'
    ]
  },
  {
    files: ['packages/core/test/**/*.ts'],
    rules: {
      'antfu/no-import-dist': 'off'
    }
  },
  {
    files: ['playground/**/*.ts'],
    rules: {
      'ts/ban-ts-comment': 'off',
      'ts/explicit-function-return-type': 'off',
      'ts/no-explicit-any': 'off'
    }
  }
)
