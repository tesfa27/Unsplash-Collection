import CollectionsGrid from "../components/CollectionsGrid"

const Collections = () => {
  return (
    <section className="mt-16">
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-4">
        
        {/* Intro */}
        <div className="mx-auto mb-10 max-w-xl text-center">
          <h1 className="text-3xl font-semibold relative">
            <span className="absolute inset-0 bg-[url('/gradiend-bg.svg')] bg-cover bg-center bg-clip-text text-transparent">
              Collections
            </span>
            <span className="opacity-0">Collections</span>
          </h1>

          <p className="mt-4 text-base font-light">
            Explore the world through collections of beautiful <br />
            photos free to use under the{" "}
            <span className="font-semibold underline underline-offset-4">
              Unsplash License
            </span>.
          </p>
        </div>

        {/* Grid  */}
        <CollectionsGrid />
      </div>
    </section>
  )
}

export default Collections
