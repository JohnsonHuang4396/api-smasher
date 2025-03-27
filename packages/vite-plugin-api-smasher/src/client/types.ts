export interface GenerateConfig {
  selectedApi: string[]
  selectedTemplate: string | null
  outputDir: string
  api: boolean
  model: boolean
  apiOutputDir: string
  modelOutputDir: string
}

export interface HistoryItem extends GenerateConfig {
  createdAt: string
}
