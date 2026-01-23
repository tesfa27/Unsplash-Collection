import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router'
import ImageGrid from '../components/ImageGrid'
import { useImageSearch } from '../hooks/useImageSearch'
import SearchBar from '../components/SearchBar'

const SearchResults = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.get('q') || ''
  const [searchQuery, setSearchQuery] = useState(query)
  const { images, loading, searchImages } = useImageSearch()

  useEffect(() => {
    if (query) {
      setSearchQuery(query)
      searchImages(query)
    }
  }, [query, searchImages])

  const handleSearch = () => {
    if (searchQuery.trim()) {
      setSearchParams({ q: searchQuery })
    }
  }

  return (
    <section>
      <div className='relative'>
        <img src='/gradiend-bg.svg' alt="Gradient background" className="w-full h-24 object-cover" />
        <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 w-96 bg-white rounded-lg shadow-sm">
          <SearchBar 
            query={searchQuery} 
            onQueryChange={setSearchQuery} 
            onSearch={handleSearch} 
          />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <ImageGrid images={images} loading={loading} />
      </div>
    </section>
  )
}

export default SearchResults