import { useState, useCallback } from 'react'
import { unsplashApi } from '../services/unsplashApi'

export const useImageSearch = () => {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  
  const { searchPhotos } = unsplashApi

  const searchImages = useCallback(async (query) => {
    if (!query.trim()) return

    setLoading(true)
    setError(null)
    
    try {
      const data = await searchPhotos(query)
      setImages(data.results || [])
    } catch (err) {
      setError(err.message)
      setImages([])
    } finally {
      setLoading(false)
    }
  }, [searchPhotos])

  return { images, loading, error, searchImages }
}