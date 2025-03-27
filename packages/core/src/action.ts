import type { GeneratorOptions } from './generator'
import type { SwaggerConfig, SwaggerResponse } from './types'
import { select } from '@clack/prompts'
import { DEFAULT_API_OUTPUT_DIR, DEFAULT_MODEL_OUTPUT_DIR, DEFAULT_OUTPUT_DIR } from './config'
import { createGeneratorContext, getGeneratorContext } from './context'
import { fetchSwaggerDocs } from './fetch-api'
import { generateApiFiles } from './generator'
import { promptUserInteraction } from './prompt'

export type Template = string | {
  name: string
  path: string
}

export interface ActionOptions {
  /**
   * Swagger API 文档地址配置
   */
  config: SwaggerConfig
  /**
   * 是否自动执行（不需要用户交互）
   */
  autoRun?: boolean
  /**
   * 自动执行时的输出目录，默认为./src/api
   */
  outputDir?: string
  /**
   * 自动执行时要生成的API路径列表
   */
  selectedPaths?: string[]
  /**
   * 生成配置
   */
  generateConfig?: {
    /**
     * 是否生成模型文件
     */
    model?: {
      /**
       * 是否启用模型文件生成
       */
      enable?: boolean
      /**
       * 输出目录，默认为./Model.ts
       */
      outputDir?: string
    }
    /**
     * API 生成配置
     */
    api?: {
      /**
       * 是否生成 API 文件
       */
      enable?: boolean
      /**
       * 输出目录，默认为./Api.ts
       */
      outputDir?: string
      /**
       * 模板路径
       */
      template?: Template[]
    }
  }
}

export async function generateApi({
  config,
  autoRun = false,
  outputDir = DEFAULT_OUTPUT_DIR,
  selectedPaths = [],
  generateConfig = {
    model: {
      enable: true,
      outputDir: DEFAULT_MODEL_OUTPUT_DIR
    },
    api: {
      enable: true,
      outputDir: DEFAULT_API_OUTPUT_DIR
    }
  }
}: ActionOptions): Promise<void> {
  try {
    const responses = await fetchSwaggerDocs(config)

    createGeneratorContext({ config, outputDir, selectedPaths, generateConfig }, responses)

    if (!autoRun) {
      const result = await promptUserInteraction({
        responses,
        actionOptions: {
          config,
          outputDir,
          generateConfig
        }
      })
      return await processApiGeneration(responses, result)
    }

    const availablePaths = extractAvailablePaths(responses)

    const validPaths = validateSelectedPaths(selectedPaths, availablePaths)
    if (validPaths.length === 0)
      throw new Error('❌ No valid API paths selected')

    return await processApiGeneration(responses, {
      outputDir,
      selectedPaths: validPaths,
      pathDetails: availablePaths.filter(info =>
        validPaths.includes(info.path)
      ),
      generateConfig
    })
  }
  catch (error) {
    if (error instanceof Error)
      throw new Error(`❌ Failed to generate API: ${error.message}`)
    throw error
  }
}

interface ProcessResult {
  outputDir: string
  selectedPaths: string[]
  pathDetails: GeneratorOptions['pathDetails']
  generateConfig: ActionOptions['generateConfig']
}

export async function processApiGeneration(
  responses: SwaggerResponse[],
  result: ProcessResult
): Promise<void> {
  try {
    const { outputDir, pathDetails, generateConfig } = result
    let template: string | undefined
    if (Array.isArray(generateConfig?.api?.template) && generateConfig.api.template.length > 1) {
      template = await select({
        message: 'Select the API template',
        options: getGeneratorContext().templates.map((template) => {
          if (typeof template === 'string') {
            return {
              value: template,
              label: template
            }
          }
          return {
            value: template.name,
            label: template.name,
            hint: template.path
          }
        })
      }) as string
    }
    await generateApiFiles({
      outputDir,
      pathDetails,
      responses,
      generateConfig: {
        ...generateConfig,
        template
      }
    })
  }
  catch (error) {
    if (error instanceof Error)
      throw new Error(`❌ Failed to generate API files: ${error.message}`)
    throw error
  }
}

export function extractAvailablePaths(responses: SwaggerResponse[]): Array<ProcessResult['pathDetails'][number]> {
  return responses.flatMap(response =>
    Object.entries(response.paths || {}).flatMap(([path, methods]) =>
      Object.entries(methods as Record<string, any>).map(([method, info]) => {
        const { summary, operationId } = info
        return {
          method: method.toUpperCase(),
          path,
          summary,
          operationId,
          raw: info
        }
      })
    )
  )
}

export function validateSelectedPaths(
  selectedPaths: string[],
  availablePaths: Array<{ method: string, path: string }>
): string[] {
  const validPaths = new Set(
    availablePaths.map(info => info.path)
  )

  return selectedPaths.filter(path => validPaths.has(path))
}
