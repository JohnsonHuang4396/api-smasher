
export async function getWechatAssessmentByEmployee(params: any) {
  return await fetch('/wechatContentMsg/getWechatAssessmentByEmployee', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  }).then(res => res.json())
}


export async function getWechatAssessmentByClient(params: any) {
  return await fetch('/wechatContentMsg/getWechatAssessmentByClient', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  }).then(res => res.json())
}
