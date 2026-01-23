import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import SearchBar from '../components/SearchBar'

const Home = () => {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`)
    }
  }

  return (
    <section className="flex min-h-[calc(100vh-9rem)] mt-16 items-center justify-center bg-[url('/hero-image.png')] bg-top md:bg-center bg-cover">
      <div className="w-full max-w-xl px-4">
        <div className="flex flex-col items-center gap-6">
          <h1 className="text-3xl font-semibold">Search</h1>
          <p className="font-light text-base">
            Search high-resolution images from Unsplash
          </p>
          <SearchBar 
            query={query} 
            onQueryChange={setQuery} 
            onSearch={handleSearch} 
          />
        </div>
      </div>
    </section>
  )
}

export default Home