import React from 'react'

const Home = () => {
  return (
    <section className="flex min-h-[calc(100vh-9rem)] mt-16 items-center justify-center bg-[url('/hero-image.png')]  bg-top md:bg-center bg-cover"> 
      {/* Container */}
    <div className="w-full max-w-xl px-4">
      {/* Stack */}
        <div className="flex flex-col items-center gap-6">

          <h1 className="text-3xl font-semibold">
            Search
          </h1 >

          <p className='font-light text-base'>
            Search high-resolution images from Unsplash
          </p>

          <div className="w-full relative">
            <input
              type="text"
              placeholder="Enter your keywords..."
              className="w-full rounded-lg border border-gray-300 px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <img src="/Search.svg" alt="Search" className='pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400' />
          </div>

        </div>
    </div>
    
    </section>
  )
}

export default Home