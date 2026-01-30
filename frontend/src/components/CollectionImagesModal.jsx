import { useEffect } from "react"
import { useCollectionsStore } from "../stores/collectionsStore"

const CollectionImagesModal = ({ isOpen, onClose, collectionId }) => {
  const { currentCollection, fetchCollection, loading } = useCollectionsStore()

  useEffect(() => {
    if (isOpen && collectionId) {
      fetchCollection(collectionId)
    }
  }, [isOpen, collectionId, fetchCollection])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-4xl mx-4 shadow-2xl max-h-[80vh] overflow-hidden">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">{currentCollection?.name}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>
        
        {loading ? (
          <div className="text-center py-8">Loading images...</div>
        ) : (
          <div className="overflow-y-auto max-h-96">
            {currentCollection?.images?.length === 0 ? (
              <p className="text-gray-500 text-center py-8">No images in this collection</p>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {currentCollection?.images?.map((image) => (
                  <div key={image.imageId} className="relative group">
                    <img
                      src={image.thumbnailUrl || image.url}
                      alt={image.altDescription || 'Collection image'}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default CollectionImagesModal