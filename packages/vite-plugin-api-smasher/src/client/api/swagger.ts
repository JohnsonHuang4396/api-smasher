import type { ActionOptions, SwaggerResponse } from '@johnsonhuang4396/api-smasher'

export async function fetchSwaggerDocs(): Promise<SwaggerResponse[]> {
  const response = await fetch(`${window.location.origin}/api-smasher/swagger`)
  const data = await response.json()
  return data.docs
}

export async function refreshSwaggerDocs(): Promise<SwaggerResponse[]> {
  const response = await fetch(`${window.location.origin}/api-smasher/refresh-swagger`)
  const data = await response.json()
  return data.docs
}

export async function fetchSwaggerTemplates(): Promise<{ name: string, path: string }[]> {
  const response = await fetch(`${window.location.origin}/api-smasher/templates`)
  const data = await response.json()
  return data.docs
}

export async function generateApi(body: Omit<ActionOptions, 'config' | 'autoRun'>) {
  const response = await fetch(`${window.location.origin}/api-smasher/generate`, {
    method: 'POST',
    body: JSON.stringify(body)
  })
  const data = await response.json()
  return data.success === true
}
