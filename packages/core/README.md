# Api Smasher

[![npm version](https://img.shields.io/npm/v/@johnsonhuang4396/api-smasher)](https://www.npmjs.com/package/@johnsonhuang4396/api-smasher)
[![jsDocs.io](https://img.shields.io/badge/jsDocs.io-reference-blue)](https://www.jsdocs.io/package/@johnsonhuang4396/api-smasher)
[![github release](https://img.shields.io/github/v/release/JohnsonHuang4396/api-smasher)](https://github.com/JohnsonHuang4396/api-smasher/releases)
![NPM Unpacked Size](https://img.shields.io/npm/unpacked-size/%40johnsonhuang4396%2Fapi-smasher)
![NPM License](https://img.shields.io/npm/l/%40johnsonhuang4396%2Fapi-smasher)

_Convert Swagger documentation to TypeScript API files (Support custom template)_

## Install
```bash
npm i @johnsonhuang4396/api-smasher
```

## How to use
```ts
import { generateApi } from '@johnsonhuang4396/api-smasher'

generateApi({
  config: 'YOUR_SWAGGER_REMOTE_URL',
  autoRun: true,
  outputDir: 'YOUR_OUTPUT_DIR',
  selectedPaths: [API_PATHS_YOU_WANT]
})
```
then you will find `Api.ts` and `Model.ts` file be generated at **YOUR_OUTPUT_DIR**

## More usage ways

Find it [HERE](https://github.com/JohnsonHuang4396/api-smasher/tree/main/packages/core/test)

## Types

Find it [HERE](https://github.com/JohnsonHuang4396/api-smasher/blob/main/packages/core/src/action.ts)
