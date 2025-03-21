// @ts-nocheck
export async function getWechatAssessmentByEmployee(body: WechatAssessmentQO) {
  const result = await axios.post<RIPageWechatEmployeeConversationVO>(
    '/api/wechatContentMsg/getWechatAssessmentByEmployee',
    body
  )
  return result.data.data
}
