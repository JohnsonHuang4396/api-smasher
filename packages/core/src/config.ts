import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

export const DIR_DIST = typeof __dirname !== 'undefined'
  ? __dirname
  : dirname(fileURLToPath(import.meta.url))

export const DEFAULT_OUTPUT_DIR = './src/api' as const

export const DEFAULT_WEB_REQUEST_TEMPLATE_PATH = resolve(DIR_DIST, './template/web-request.ejs')

export const DEFAULT_API_OUTPUT_DIR = './Api.ts' as const

export const DEFAULT_MODEL_OUTPUT_DIR = './Model.ts' as const
