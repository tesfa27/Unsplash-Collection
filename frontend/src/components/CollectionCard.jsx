const CollectionCard = ({
  title,
  photos = [],
  totalPhotos,
  onClick
}) => {
  const count = photos.length
  const displayCount = totalPhotos ?? count

  return (
    <div 
      onClick={onClick}
      className="overflow-hidden rounded-lg bg-gray-100 cursor-pointer hover:shadow-lg transition-shadow"
    >
      <div className="h-56 w-full">
        {count === 1 && (
          <img
            src={photos[0]}
            alt={title}
            className="h-full w-full object-cover"
          />
        )}

        {count === 2 && (
          <div className="flex h-full">
            {photos.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={title}
                className="h-full w-1/2 object-cover"
              />
            ))}
          </div>
        )}

        {count >= 3 && (
          <div className="flex h-full">
            <img
              src={photos[0]}
              alt={title}
              className="h-full w-3/4 object-cover"
            />
            <div className="flex h-full w-1/4 flex-col">
              <img
                src={photos[1]}
                alt={title}
                className="h-1/2 w-full object-cover"
              />
              <img
                src={photos[2]}
                alt={title}
                className="h-1/2 w-full object-cover"
              />
            </div>
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="truncate text-sm font-semibold">
          {title}
        </h3>
        <p className="mt-1 text-xs text-gray-500">
          {displayCount} photos
        </p>
      </div>
    </div>
  )
}

export default CollectionCard
