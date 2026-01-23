import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { useImageDetails } from '../hooks/useUnsplash'

const ImageDetail = () => {
  const { id } = useParams()
  const { image, loading, error, fetchImage } = useImageDetails()

  useEffect(() => {
    if (id) {
      fetchImage(id)
    }
  }, [id, fetchImage])

  if (loading) return <div className="pt-20 text-center">Loading...</div>
  if (error) return <div className="pt-20 text-center text-red-500">Error: {error}</div>
  if (!image) return null

  return (
    <section className="pt-16">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img 
              src={image.urls.regular} 
              alt={image.alt_description || 'Unsplash image'}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <img 
                src={image.user.profile_image.medium} 
                alt={image.user.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <span className="font-normal text-base">{image.user.name}</span>
            </div>
            <p className="text-gray-600 text-xs">
              Published on {new Date(image.created_at).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 bg-gray-100 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors">
                <img src="/Plus.svg" alt="Add" className="w-4 h-4" />
                <span className="text-sm font-medium">Add to collection</span>
              </button>
              <button className="flex items-center gap-2 bg-gray-100 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors">
                <img src="/down arrow.svg" alt="Download" className="w-4 h-4" />
                <span className="text-sm font-medium">Download</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ImageDetail