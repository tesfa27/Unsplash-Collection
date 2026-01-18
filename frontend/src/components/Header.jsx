import { NavLink } from "react-router";

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
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive
                    ? "text-black bg-gray-100 px-5 py-2 rounded-sm"
                    : "text-gray-700 hover:text-black"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/collections"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive
                    ? "text-black bg-gray-100 px-5 py-2 rounded-sm"
                    : "text-gray-700 hover:text-black"
                }`
              }
            >
              Collections
            </NavLink>
          </nav>
    </div>
    </div>
    </header>
  )
}

export default Header