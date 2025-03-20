import type { GeneratorOptions } from './generator'
import type { SwaggerConfig, SwaggerResponse } from './types'
import { DEFAULT_OUTPUT_DIR } from './config'
import { fetchSwaggerDocs } from './fetch-api'
import { generateApiFiles } from './generator'
import { promptUserInteraction } from './prompt'

interface ActionOptions {
  /**
   * Swagger API 文档地址配置
   */
  config: SwaggerConfig
  /**
   * 是否自动执行（不需要用户交互）
   */
  autoRun?: boolean
  /**
   * 自动执行时的输出目录
   */
  outputDir?: string
  /**
   * 自动执行时要生成的API路径列表
   */
  selectedPaths?: string[]
}

export async function generateApi({
  config,
  autoRun = false,
  outputDir = DEFAULT_OUTPUT_DIR,
  selectedPaths = []
}: ActionOptions): Promise<void> {
  try {
    // 1. 获取 Swagger 文档
    const responses = await fetchSwaggerDocs(config)

    // 2. 如果不是自动运行，则进行用户交互
    if (!autoRun) {
      const result = await promptUserInteraction(responses)
      return await processApiGeneration(responses, result)
    }

    // 3. 自动运行模式
    const availablePaths = extractAvailablePaths(responses)

    // 验证选择的路径是否有效
    const validPaths = validateSelectedPaths(selectedPaths, availablePaths)
    if (validPaths.length === 0)
      throw new Error('No valid API paths selected')

    // 4. 生成文件
    return await processApiGeneration(responses, {
      outputDir,
      selectedPaths: validPaths,
      pathDetails: availablePaths.filter(info =>
        validPaths.includes(info.path)
      )
    })
  }
  catch (error) {
    if (error instanceof Error)
      throw new Error(`Failed to generate API: ${error.message}`)
    throw error
  }
}

interface ProcessResult {
  outputDir: string
  selectedPaths: string[]
  pathDetails: GeneratorOptions['pathDetails']
}

async function processApiGeneration(
  responses: SwaggerResponse[],
  result: ProcessResult
): Promise<void> {
  try {
    generateApiFiles({
      outputDir: result.outputDir,
      pathDetails: result.pathDetails,
      responses
    })
  }
  catch (error) {
    if (error instanceof Error)
      throw new Error(`Failed to generate API files: ${error.message}`)
    throw error
  }
}

function extractAvailablePaths(responses: SwaggerResponse[]): Array<ProcessResult['pathDetails'][number]> {
  return responses.flatMap(response =>
    Object.entries(response.paths || {}).flatMap(([path, methods]) =>
      Object.entries(methods as Record<string, any>).map(([method, info]) => ({
        method: method.toUpperCase(),
        path,
        summary: info.summary,
        operationId: info.operationId,
        raw: info
      }))
    )
  )
}

function validateSelectedPaths(
  selectedPaths: string[],
  availablePaths: Array<{ method: string, path: string }>
): string[] {
  const validPaths = new Set(
    availablePaths.map(info => info.path)
  )

  return selectedPaths.filter(path => validPaths.has(path))
}
