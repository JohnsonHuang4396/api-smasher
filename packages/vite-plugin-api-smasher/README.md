# Api Smasher

[![npm version](https://img.shields.io/npm/v/@johnsonhuang4396/vite-plugin-api-smasher)](https://www.npmjs.com/package/@johnsonhuang4396/vite-plugin-api-smasher)
[![jsDocs.io](https://img.shields.io/badge/jsDocs.io-reference-blue)](https://www.jsdocs.io/package/@johnsonhuang4396/vite-plugin-api-smasher)
[![github release](https://img.shields.io/github/v/release/JohnsonHuang4396/api-smasher)](https://github.com/JohnsonHuang4396/api-smasher/releases)
![NPM Unpacked Size](https://img.shields.io/npm/unpacked-size/%40johnsonhuang4396%2Fvite-plugin-api-smasher)
![NPM License](https://img.shields.io/npm/l/%40johnsonhuang4396%2Fvite-plugin-api-smasher)

_Vite plugin for [Api-Smasher](https://github.com/JohnsonHuang4396/api-smasher/tree/main/packages/core)_

## Install
```bash
npm i @johnsonhuang4396/vite-plugin-api-smasher
```

## How to use
```ts
import apiSmasher from '@johnsonhuang4396/vite-plugin-api-smasher'

export default defineConfig({
  server: {
    port: 3000
  },
  plugins: [
    apiSmasher({
      config: 'YOUR_SWAGGER_REMOTE_URL',
    })
  ]
})
```

then run `npm run dev` and visit [localhost:3000/__api-smasher/](localhost:3000/__api-smasher/) to generate API and type files.

![preview](/packages/vite-plugin-api-smasher/public/website.png)
