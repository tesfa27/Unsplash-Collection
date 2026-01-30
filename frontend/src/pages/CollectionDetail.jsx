import { useEffect } from "react"
import { useParams, useNavigate } from "react-router"
import { useCollectionsStore } from "../stores/collectionsStore"

const CollectionDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { currentCollection, fetchCollection, loading, error } = useCollectionsStore()

  useEffect(() => {
    if (id) {
      fetchCollection(id)
    }
  }, [id, fetchCollection])

  if (loading) return <div className="pt-20 text-center">Loading collection...</div>
  if (error) return <div className="pt-20 text-center text-red-500">Error: {error}</div>
  if (!currentCollection) return null

  return (
    <section className="pt-16">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <button
            onClick={() => navigate('/collections')}
            className="text-gray-600 hover:text-gray-800 mb-4"
          >
            ← Back to Collections
          </button>
          <h1 className="text-3xl font-bold">{currentCollection.name}</h1>
          <p className="text-gray-600 mt-2">
            {currentCollection.images?.length || 0} photos
          </p>
        </div>

        {currentCollection.images?.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No images in this collection yet</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentCollection.images?.map((image) => (
              <div 
                key={image.imageId} 
                className="group cursor-pointer"
                onClick={() => navigate(`/image/${image.imageId}`)}
              >
                <img
                  src={image.url}
                  alt={image.altDescription || 'Collection image'}
                  className="w-full h-64 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default CollectionDetail