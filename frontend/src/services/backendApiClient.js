const BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000'

export const backendApiClient = async (endpoint, options = {}) => {
  const url = `${BACKEND_BASE_URL}${endpoint}`

  const defaultHeaders = {
    'Content-Type': 'application/json',
  }

  const config = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  }

  const response = await fetch(url, config)

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}))
    throw new Error(errorBody.error || `HTTP ${response.status}: ${response.statusText}`)
  }

  return response.json()
}