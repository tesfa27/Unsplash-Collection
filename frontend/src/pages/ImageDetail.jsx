import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useImageDetails } from '../hooks/useUnsplash'
import AddToCollectionModal from '../components/AddToCollectionModal'
import { useCollectionsStore } from '../stores/collectionsStore'

const ImageDetail = () => {
  const { id } = useParams()
  const { image, loading, error, fetchImage } = useImageDetails()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { collections, removeImageFromCollection } = useCollectionsStore()

  // Get collections that contain this image
  const imageCollections = collections.filter(collection => 
    collection.images?.some(img => img.imageId === image?.id)
  )

  const handleRemoveFromCollection = async (collectionId) => {
    if (!image) return
    try {
      await removeImageFromCollection(collectionId, image.id)
    } catch (error) {
      console.error("Failed to remove image from collection:", error)
    }
  }

  const handleDownload = async () => {
    if (!image) return
    
    try {
      const response = await fetch(image.urls.full)
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = `unsplash-${image.id}.jpg`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Download failed:', error)
    }
  }

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
              <button 
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-2 bg-gray-100 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <img src="/Plus.svg" alt="Add" className="w-4 h-4" />
                <span className="text-sm font-medium">Add to collection</span>
              </button>
              <button 
                onClick={handleDownload}
                className="flex items-center gap-2 bg-gray-100 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <img src="/down arrow.svg" alt="Download" className="w-4 h-4" />
                <span className="text-sm font-medium">Download</span>
              </button>
            </div>
            
            {/* Show collections this image belongs to */}
            {imageCollections.length > 0 && (
              <div>
                <h3 className="font-medium mb-2">In Collections:</h3>
                <div className="space-y-2">
                  {imageCollections.map((collection) => (
                    <div key={collection._id} className="flex items-center gap-3 p-2 bg-gray-50 rounded-md">
                      {/* Collection Card */}
                      <div className="overflow-hidden rounded bg-gray-100 w-16 h-12 flex-shrink-0">
                        {collection.images?.length === 1 && (
                          <img
                            src={collection.images[0].url}
                            alt={collection.name}
                            className="h-full w-full object-cover"
                          />
                        )}
                        {collection.images?.length === 2 && (
                          <div className="flex h-full">
                            {collection.images.slice(0, 2).map((img, i) => (
                              <img
                                key={i}
                                src={img.url}
                                alt={collection.name}
                                className="h-full w-1/2 object-cover"
                              />
                            ))}
                          </div>
                        )}
                        {collection.images?.length >= 3 && (
                          <div className="flex h-full">
                            <img
                              src={collection.images[0].url}
                              alt={collection.name}
                              className="h-full w-3/4 object-cover"
                            />
                            <div className="flex h-full w-1/4 flex-col">
                              <img
                                src={collection.images[1].url}
                                alt={collection.name}
                                className="h-1/2 w-full object-cover"
                              />
                              <img
                                src={collection.images[2].url}
                                alt={collection.name}
                                className="h-1/2 w-full object-cover"
                              />
                            </div>
                          </div>
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <span className="text-sm font-medium">{collection.name}</span>
                        <p className="text-xs text-gray-500">{collection.images?.length || 0} photos</p>
                      </div>
                      
                      <button
                        onClick={() => handleRemoveFromCollection(collection._id)}
                        className="text-red-500 hover:text-red-700 text-sm"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <AddToCollectionModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        image={image}
      />
    </section>
  )
}

export default ImageDetail