import { useState, useEffect } from "react"
import { useCollectionsStore } from "../stores/collectionsStore"

const AddToCollectionModal = ({ isOpen, onClose, image }) => {
  const [searchTerm, setSearchTerm] = useState("")
  const { collections, fetchCollections, addImageToCollection, loading } = useCollectionsStore()

  useEffect(() => {
    if (isOpen) {
      fetchCollections()
    }
  }, [isOpen, fetchCollections])

  const filteredCollections = collections.filter(collection => {
    const matchesSearch = collection.name.toLowerCase().includes(searchTerm.toLowerCase())
    const imageNotInCollection = !collection.images?.some(img => img.imageId === image?.id)
    return matchesSearch && imageNotInCollection
  })

  const handleAddToCollection = async (collectionId) => {
    if (!image) return
    
    try {
      const imageData = {
        imageId: image.id,
        url: image.urls.regular,
        thumbnailUrl: image.urls.thumb,
        altDescription: image.alt_description
      }
      await addImageToCollection(collectionId, imageData)
      onClose()
    } catch (error) {
      console.error("Failed to add image to collection:", error)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4 shadow-2xl">
        <h2 className="text-xl font-semibold mb-4">Add to Collection</h2>
        
        <div className="mb-4">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search collections..."
          />
        </div>

        <div className="max-h-60 overflow-y-auto mb-4">
          {filteredCollections.length === 0 ? (
            <p className="text-gray-500 text-center py-4">No available collections</p>
          ) : (
            filteredCollections.map((collection) => (
              <div
                key={collection._id}
                onClick={() => handleAddToCollection(collection._id)}
                className="flex items-center justify-between p-3 hover:bg-gray-50 cursor-pointer rounded-md"
              >
                <div>
                  <h3 className="font-medium">{collection.name}</h3>
                  <p className="text-sm text-gray-500">{collection.images?.length || 0} photos</p>
                </div>
                <img src="/Plus.svg" alt="Add" className="w-4 h-4" />
              </div>
            ))
          )}
        </div>

        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddToCollectionModal