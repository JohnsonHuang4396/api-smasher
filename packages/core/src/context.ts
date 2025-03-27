import type { ActionOptions, Template } from './action'
import type { SwaggerResponse } from './types'
import { DEFAULT_OUTPUT_DIR, DEFAULT_WEB_REQUEST_TEMPLATE_PATH } from './config'

class GeneratorContext {
  private _templates: Template[] = [
    {
      name: 'default-web-fetch',
      path: DEFAULT_WEB_REQUEST_TEMPLATE_PATH
    }
  ]

  private _responses: SwaggerResponse[] = []

  constructor(
    public readonly options: ActionOptions,
    responses?: SwaggerResponse[]
  ) {
    if (Array.isArray(this.options.generateConfig?.api?.template)) {
      this.templates.push(...this.options.generateConfig.api.template)
    }
    if (responses) {
      this.responses = responses
    }
  }

  get outputDir(): string {
    return this.options.outputDir ?? DEFAULT_OUTPUT_DIR
  }

  get templates(): Template[] {
    return this._templates
  }

  get responses(): SwaggerResponse[] {
    return this._responses
  }

  set responses(responses: SwaggerResponse[]) {
    this._responses = responses
  }

  get selectedPaths(): string[] {
    return this.options.selectedPaths ?? []
  }

  get generateConfig(): ActionOptions['generateConfig'] {
    return this.options.generateConfig ?? {}
  }
}

let context: GeneratorContext | null = null

export function createGeneratorContext(options: ActionOptions, responses?: SwaggerResponse[]): GeneratorContext {
  context = new GeneratorContext(options, responses)
  return context
}

export function getGeneratorContext(): GeneratorContext {
  if (!context) {
    throw new Error('Generator context not found')
  }
  return context
}
