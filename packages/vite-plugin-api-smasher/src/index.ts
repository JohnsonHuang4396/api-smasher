import type { PromptActionOptions } from '@johnsonhuang4396/api-smasher'
import type { Plugin } from 'vite'
import process, { exit } from 'node:process'
import { createInterface } from 'node:readline'
import { generateApi } from '@johnsonhuang4396/api-smasher'

let isListening = false
let rl: ReturnType<typeof createInterface>

function createRl(options: PromptActionOptions): void {
  rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '> '
  })

  // 显示提示信息
  // eslint-disable-next-line no-console
  console.log('\n🚀 API Smasher is ready!')
  // eslint-disable-next-line no-console
  console.log('Type "api-smasher" or "as" to generate API files\n')
  rl.prompt()

  // 监听用户输入
  rl.on('line', async (input) => {
    const command = input.trim().toLowerCase()
    if (command === 'api-smasher' || command === 'as') {
      try {
        await generateApi({
          ...options,
          autoRun: false
        })
        // eslint-disable-next-line no-console
        console.log('\n✅ API Smasher created successfully')
        rl.prompt()
      }
      catch (error) {
        console.error('❌ API generation failed:', error instanceof Error ? error.message : String(error))
        rl.close()
        isListening = false
        createRl(options)
      }
    }
  })

  // 处理中断信号
  process.on('SIGINT', () => {
    if (rl) {
      rl.close()
      isListening = false
    }
  })

  // 处理错误
  rl.on('error', (error) => {
    console.error('❌ Input error:', error.message)
    rl.prompt()
  })

  // 处理关闭
  rl.on('close', () => {
    isListening = false
    // eslint-disable-next-line no-console
    console.log('\n👋 API Smasher stopped')
    exit(0)
  })
}

export interface VitePluginApiSmasherOptions extends PromptActionOptions { }

export default function apiSmasher(options: VitePluginApiSmasherOptions): Plugin {
  return {
    name: 'vite-plugin-api-smasher',
    apply: 'serve',
    configureServer() {
      if (isListening)
        return

      isListening = true

      // 创建 readline 接口
      createRl(options)
    },
    closeBundle() {
      if (rl) {
        rl.close()
        isListening = false
      }
    }
  }
}
