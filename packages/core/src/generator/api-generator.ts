import type { GeneratorOptions } from '.'
import { dirname } from 'node:path'
import { renderFile } from 'ejs'
import { join, normalize } from 'pathe'
import { DEFAULT_API_TEMPLATE_PATH } from '../config'

export interface ApiGeneratorOptions {
  /**
   * 模板路径，默认使用内置的 web-fetch 模板
   */
  template?: string
}

export async function generateApiContent(
  pathDetails: GeneratorOptions['pathDetails'],
  options: ApiGeneratorOptions = {}
): Promise<string> {
  try {
    const templatePath = normalize(
      options.template || join(dirname(import.meta.url), '..', DEFAULT_API_TEMPLATE_PATH)
    ).replace('file:', '')

    const result = await renderFile(templatePath, {
      pathDetails
    }, {
      async: true
    })

    return result.trim()
  }
  catch (error) {
    if (error instanceof Error) {
      throw new TypeError(`Failed to generate API content: ${error.message}`)
    }
    throw error
  }
}
