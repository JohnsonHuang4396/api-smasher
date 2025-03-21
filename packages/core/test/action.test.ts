import * as fs from 'node:fs'
import * as path from 'node:path'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { generateApi } from '../src/action'

const REAL_SWAGGER_URL = 'http://192.168.100.125:18083/v3/api-docs'
const TEST_OUTPUT_DIR = './test/test-output/api'

describe('generateApi', { only: true }, () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should generate API files in auto-run mode and match snapshot', async () => {
    if (fs.existsSync(TEST_OUTPUT_DIR)) {
      fs.rmSync(TEST_OUTPUT_DIR, { recursive: true })
    }

    const selectedPaths = [
      '/wechatContentMsg/getWechatAssessmentByEmployee',
      '/wechatContentMsg/getWechatAssessmentByClient'
    ]

    await generateApi({
      config: REAL_SWAGGER_URL,
      autoRun: true,
      outputDir: TEST_OUTPUT_DIR,
      selectedPaths
    })

    // 验证文件是否生成
    expect(fs.existsSync(path.join(TEST_OUTPUT_DIR, 'Api.ts'))).toBe(true)
    expect(fs.existsSync(path.join(TEST_OUTPUT_DIR, 'Model.ts'))).toBe(true)

    // 读取生成的文件内容
    const apiContent = fs.readFileSync(path.join(TEST_OUTPUT_DIR, 'Api.ts'), 'utf-8')
    const modelContent = fs.readFileSync(path.join(TEST_OUTPUT_DIR, 'Model.ts'), 'utf-8')

    // 将生成的文件内容与快照比对
    expect(apiContent).toMatchSnapshot('generated-api-content')
    expect(modelContent).toMatchSnapshot('generated-model-content')
  })

  it('should handle invalid paths in auto-run mode', async () => {
    const selectedPaths = ['POST:/invalid/path']

    await expect(generateApi({
      config: REAL_SWAGGER_URL,
      autoRun: true,
      outputDir: TEST_OUTPUT_DIR,
      selectedPaths
    })).rejects.toBeTruthy()
  })

  it('should handle network errors', async () => {
    const invalidUrl = 'http://invalid-url.example.com/swagger'

    await expect(generateApi({
      config: invalidUrl,
      autoRun: true,
      outputDir: TEST_OUTPUT_DIR,
      selectedPaths: []
    })).rejects.toBeTruthy()
  })

  it('should handle file system errors', async () => {
    const invalidDir = '/invalid/directory'
    const selectedPaths = [
      'POST:/wechatContentMsg/getWechatAssessmentByEmployee'
    ]

    await expect(generateApi({
      config: REAL_SWAGGER_URL,
      autoRun: true,
      outputDir: invalidDir,
      selectedPaths
    })).rejects.toBeTruthy()
  })
})
