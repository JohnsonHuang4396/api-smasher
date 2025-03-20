import type { SwaggerResponse } from './types'
import { existsSync, mkdirSync } from 'node:fs'
import process from 'node:process'
import { confirm, group, intro, multiselect, outro, spinner, text } from '@clack/prompts'
import { normalize, resolve } from 'pathe'
import { DEFAULT_OUTPUT_DIR } from './config'

interface PathInfo {
  method: string
  path: string
  summary?: string
  operationId?: string
  group: string
}

export async function promptUserInteraction(responses: SwaggerResponse[]): Promise<{
  selectedPaths: string[]
  outputDir: string
  pathDetails: PathInfo[]
}> {
  intro('API Smasher - Swagger to TypeScript converter')

  const s = spinner()
  s.start('Loading available API endpoints')

  // 1. 按 remote + name 分组并展示所有可用的API路径供用户选择
  const groupedPaths = responses.reduce((acc, response) => {
    const groupName = `${response.name} (${response.remote})`
    const paths = Object.entries(response.paths || {}).flatMap(([path, methods]) =>
      Object.entries(methods as Record<string, any>).map(([method, info]) => ({
        method: method.toUpperCase(),
        path,
        summary: info.summary,
        operationId: info.operationId,
        group: groupName
      }))
    )
    acc[groupName] = paths
    return acc
  }, {} as Record<string, PathInfo[]>)

  // 2. 为每个分组创建选项
  const groupSelections = Object.entries(groupedPaths)
    .map(([groupName, paths]) => ({
      name: groupName,
      options: paths.map(info => ({
        value: `${info.method}:${info.path}`,
        label: `${info.method} ${info.path}`,
        hint: info.summary || info.operationId
      }))
    }))
    .reduce<Record<string, () => Promise<string[]>>>((acc, group) => {
    acc[group.name] = () => multiselect({
      message: 'Select the API endpoints to generate',
      options: group.options,
      required: true
    }) as Promise<string[]>
    return acc
  }, {})

  s.stop('Loaded API endpoints')

  // 3. 使用 group 进行分组选择
  const selections = await group(groupSelections, {
    onCancel() {
      outro('Operation cancelled')
      process.exit(0)
    }
  })

  const selectedPaths = Object.values(selections).flat()
  if (!selectedPaths || selectedPaths.length === 0) {
    outro('Operation cancelled')
    process.exit(0)
  }

  // 4. 询问输出目录
  const outputDir = await text({
    message: 'Where would you like to create the API files?',
    placeholder: DEFAULT_OUTPUT_DIR,
    validate(value: string) {
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
        outro(`Failed to create directory: ${error instanceof Error ? error.message : String(error)}`)
        process.exit(1)
      }
    }
    else {
      outro('Operation cancelled')
      process.exit(0)
    }
  }

  // 5. 返回用户选择的信息
  const allPaths = Object.values(groupedPaths).flat()
  return {
    selectedPaths,
    outputDir: fullPath,
    pathDetails: allPaths.filter(info =>
      selectedPaths.includes(`${info.method}:${info.path}`)
    )
  }
}
