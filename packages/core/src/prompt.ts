import type { ActionOptions } from './action'
import type { GeneratorOptions } from './generator'
import type { SwaggerResponse } from './types'
import { existsSync, mkdirSync } from 'node:fs'
import process from 'node:process'
import { confirm, intro, outro, select, spinner, text } from '@clack/prompts'
import { normalize, resolve } from 'pathe'
import { DEFAULT_OUTPUT_DIR } from './config'
import { getGeneratorContext } from './context'

export interface PromptConfig {
  responses: SwaggerResponse[]
  actionOptions: PromptActionOptions
}

export interface PromptActionOptions extends Omit<
  ActionOptions,
'selectedPaths' | 'autoRun'
> { }

export async function promptUserInteraction({
  responses,
  actionOptions
}: PromptConfig): Promise<{
    selectedPaths: string[]
    outputDir: string
    pathDetails: GeneratorOptions['pathDetails']
    generateConfig: ActionOptions['generateConfig']
  }> {
  try {
    intro('API Smasher - Swagger to TypeScript converter')

    // 1. 获取所有可用的API路径
    const availablePaths = responses.flatMap(response =>
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

    // 2. 询问用户需要创建哪些接口
    const pathInput = await text({
      message: 'Enter the API paths to generate (comma separated)',
      placeholder: '/api/test,/api/create',
      validate(value) {
        if (!value)
          return 'Please enter at least one API path'
      }
    }) as string

    if (pathInput === null) {
      outro('Operation cancelled')
      process.exit(0)
    }

    // 3. 解析用户输入的路径
    const s = spinner()
    s.start('Validating API paths')

    const selectedPaths = pathInput.split(',').map(p => p.trim())
    const validPaths = selectedPaths.filter((path) => {
      return availablePaths.some(p => p.path === path)
    })

    if (validPaths.length === 0) {
      s.stop('No valid API paths found')
      outro('Please check your input and try again')
      process.exit(1)
    }

    if (validPaths.length !== selectedPaths.length) {
      const invalidPaths = selectedPaths.filter(p => !validPaths.includes(p))
      s.stop(`Warning: Some paths are invalid: ${invalidPaths.join(', ')}`)
    }
    else {
      s.stop('All paths are valid')
    }

    // 4. 询问输出目录
    const outputDir = await text({
      message: 'Where would you like to create the API files?',
      placeholder: actionOptions?.outputDir || DEFAULT_OUTPUT_DIR,
      initialValue: actionOptions?.outputDir || DEFAULT_OUTPUT_DIR,
      validate(value) {
        if (!value)
          return 'Please enter a directory path'
      }
    }) as string

    if (outputDir === null) {
      outro('Operation cancelled')
      process.exit(0)
    }

    // 确保目录存在
    const fullPath = normalize(resolve(process.cwd(), outputDir))
    if (!existsSync(fullPath)) {
      const shouldCreate = await confirm({
        message: `Directory ${outputDir} does not exist. Create it?`
      })

      if (shouldCreate) {
        try {
          mkdirSync(fullPath, { recursive: true })
        }
        catch (error) {
          outro(`❌ Failed to create directory: ${error instanceof Error ? error.message : String(error)}`)
          process.exit(1)
        }
      }
      else {
        outro('❌ Operation cancelled')
        process.exit(0)
      }
    }

    let apiTemplatePath = ''
    apiTemplatePath = await select({
      message: 'Do you want to use a custom API template?',
      options: [
        ...(getGeneratorContext().templates.map((template) => {
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
        }) || []),
        { value: 'custom', label: 'Custom' }
      ]
    }) as string

    if (apiTemplatePath === 'custom') {
      apiTemplatePath = await text({
        message: 'Enter the path to your custom API template',
        placeholder: '~/path/to/template.ejs',
        validate(value) {
          if (!value)
            return 'Please enter a valid path'
        }
      }) as string
    }

    // 5. 返回用户选择的信息
    return {
      selectedPaths: validPaths,
      outputDir: fullPath,
      pathDetails: availablePaths.filter(info =>
        validPaths.includes(info.path)
      ),
      generateConfig: {
        ...actionOptions.generateConfig,
        api: {
          template: [apiTemplatePath]
        }
      }
    }
  }
  catch (error) {
    outro(`❌ Failed to prompt user interaction: ${error instanceof Error ? error.message : String(error)}`)
    process.exit(1)
  }
}
