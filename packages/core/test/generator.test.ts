import { describe, expect, it } from 'vitest'
import { recursiveSchema } from '../src/generator/model-generator'
import test from './test.json'

const flatSchemas = Object.entries(test.schemas)

describe('model-generator', { only: true }, () => {
  it('check recursive schema', () => {
    const result = recursiveSchema(flatSchemas as any, ['IPageWechatEmployeeConversationVO', 'IPageWechatClientConversationVO'])
    expect(result).toEqual(['WechatEmployeeConversationVO', 'WechatClientConversationVO', 'IPageWechatEmployeeConversationVO', 'IPageWechatClientConversationVO'])
  })
})
