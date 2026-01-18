import CollectionCard from "./CollectionCard"
import { mockCollections } from "../data/mockCollections"

const CollectionsGrid = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {mockCollections.map((collection) => (
          <CollectionCard
            key={collection.id}
            title={collection.title}
            photos={collection.photos}
            totalPhotos={collection.totalPhotos}
          />
        ))}
      </div>
    </section>
  )
}

export default CollectionsGrid
