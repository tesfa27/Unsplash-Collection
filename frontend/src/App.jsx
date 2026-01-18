import { BrowserRouter as Router, Routes, Route } from "react-router";
import Header from "./components/Header"
import Home from "./pages/Home"
import Collections from "./pages/Collections";

function App() {

  return (
    <Router>
      {/* Shared Header */}
      <Header />

      {/* Route content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
      </Routes>
    </Router>
  )
}

export default App
