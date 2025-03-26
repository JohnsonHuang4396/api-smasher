import antfu from '@antfu/eslint-config'

export default antfu({
  stylistic: {
    quotes: 'single',
    semi: false,
    indent: 2,
    overrides: {
      'style/comma-dangle': ['error', 'never']
    }
  },
  rules: {
    'ts/ban-ts-comment': 'off',
    'ts/explicit-function-return-type': 'off',
    'ts/no-explicit-any': 'off'
  }
})
