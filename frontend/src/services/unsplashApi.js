import { apiClient } from './apiClient'

export const unsplashApi = {
  searchPhotos: (query, perPage = 30) => 
    apiClient(`/search/photos?query=${encodeURIComponent(query)}&per_page=${perPage}`)
}