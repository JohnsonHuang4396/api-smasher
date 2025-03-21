import type { SwaggerPathDefinition, SwaggerResponse } from '../types'
import type { ApiGeneratorOptions } from './api-generator'
import { appendFileSync, existsSync, mkdirSync, writeFileSync } from 'node:fs'
import { cwd } from 'node:process'
import { normalize, resolve } from 'pathe'
import { generateApiContent } from './api-generator'
import { generateModelContent } from './model-generator'

export interface GeneratorOptions {
  outputDir: string
  pathDetails: {
    method: string
    path: string
    raw: SwaggerPathDefinition
    operationId?: string
    summary?: string
  }[]
  responses: SwaggerResponse[]
  generateConfig: ApiGeneratorOptions
}

function generateFiles(outputDir: string, path: string, content: string): void {
  if (existsSync(path)) {
    appendFileSync(path, `\n\n${content}`)
  }
  else {
    mkdirSync(outputDir, { recursive: true })
    writeFileSync(path, content)
  }
}

export async function generateApiFiles({
  outputDir,
  pathDetails,
  responses,
  generateConfig
}: GeneratorOptions): Promise<void> {
  const basePath = normalize(resolve(cwd(), outputDir))
  const apiPath = normalize(resolve(basePath, 'Api.ts'))
  const modelPath = normalize(resolve(basePath, 'Model.ts'))

  const apiContent = await generateApiContent(pathDetails, generateConfig)
  generateFiles(outputDir, apiPath, apiContent)

  const modelContent = generateModelContent(responses)
  generateFiles(outputDir, modelPath, modelContent)
}
