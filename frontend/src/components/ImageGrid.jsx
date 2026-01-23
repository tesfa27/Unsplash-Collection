import { useNavigate } from 'react-router'

const ImageGrid = ({ images, loading }) => {
  const navigate = useNavigate()

  if (!loading && images.length === 0) return null

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8">
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {images.map((image) => (
            <div
              key={image.id}
              className="cursor-pointer group break-inside-avoid mb-4"
              onClick={() => navigate(`/image/${image.id}`)}
            >
              <img
                src={image.urls.small}
                alt={image.alt_description || 'Unsplash image'}
                className="w-full object-cover rounded-lg group-hover:opacity-90 transition-opacity"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ImageGrid