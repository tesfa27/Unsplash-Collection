const UNSPLASH_BASE_URL = 'https://api.unsplash.com'

export const apiClient = async (endpoint, options = {}) => {
  const url = `${UNSPLASH_BASE_URL}${endpoint}`

  const defaultHeaders = {
    Accept: 'application/json',
    Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`
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
    throw new Error(errorBody.message || `HTTP ${response.status}: ${response.statusText}`)
  }

  return response.json()
}