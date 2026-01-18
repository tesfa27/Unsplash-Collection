import React from 'react'

const Header = () => {
  return (
    <header className="w-full border-b border-gray-200">
    <div className="mx-auto max-w-7xl px-4">
    <div className="flex h-16 items-center justify-between">
     
       {/* Logo */}
          <div className="flex items-center">
            <img src='/Logo.svg' alt='Logo' />
          </div> 
        
       {/* Navigation */}
          <nav className="flex items-center gap-6">
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-black">
              Home
            </a>
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-black">
              Collections
            </a>
          </nav>
    </div>
    </div>
    </header>
  )
}

export default Header