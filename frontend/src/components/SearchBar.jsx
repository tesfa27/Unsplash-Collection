const SearchBar = ({ query, onQueryChange, onSearch }) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearch()
    }
  }

  return (
    <div className="w-full relative">
      <input
        type="text"
        placeholder="Enter your keywords..."
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        onKeyDown={handleKeyDown}
        className="w-full rounded-lg border border-gray-300 px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
      />
      <img 
        src="/Search.svg" 
        alt="Search" 
        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" 
      />
    </div>
  )
}

export default SearchBar