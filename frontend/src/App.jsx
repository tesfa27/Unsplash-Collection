import { BrowserRouter as Router, Routes, Route } from "react-router";
import Header from "./components/Header"
import Home from "./pages/Home"
import Collections from "./pages/Collections";
import SearchResults from "./pages/SearchResults";

function App() {

  return (
    <Router>
      {/* Shared Header */}
      <Header />

      {/* Route content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/image/:id" element={<div>Image Page - Coming Soon</div>} />
      </Routes>
    </Router>
  )
}

export default App