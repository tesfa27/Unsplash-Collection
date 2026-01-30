import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import CollectionCard from "./CollectionCard"
import AddCollectionModal from "./AddCollectionModal"
import { useCollectionsStore } from "../stores/collectionsStore"

const CollectionsGrid = () => {
  const { collections, loading, error, fetchCollections } = useCollectionsStore()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const navigate = useNavigate()

  const handleCollectionClick = (collectionId) => {
    navigate(`/collections/${collectionId}`)
  }

  useEffect(() => {
    fetchCollections()
  }, [])

  if (loading) return <div className="text-center py-10">Loading collections...</div>
  if (error) return <div className="text-center py-10 text-red-500">Error: {error}</div>

  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {collections.map((collection) => (
          <CollectionCard
            key={collection._id}
            title={collection.name}
            photos={collection.images?.slice(0, 3).map(img => img.url) || []}
            totalPhotos={collection.images?.length || 0}
            onClick={() => handleCollectionClick(collection._id)}
          />
        ))}
        
        {/* Add New Collection Card */}
        <div 
          onClick={() => setIsModalOpen(true)}
          className="overflow-hidden rounded-lg bg-gray-100 border-2 border-dashed border-gray-300 hover:border-gray-400 cursor-pointer transition-colors"
        >
          <div className="h-56 w-full flex items-center justify-center">
            <div className="text-center">
              <img src="/Plus.svg" alt="Add" className="w-12 h-12 mx-auto mb-2 opacity-60" />
              <p className="text-gray-600 font-medium">Add New Collection</p>
            </div>
          </div>
        </div>
      </div>
      
      <AddCollectionModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  )
}

export default CollectionsGrid
