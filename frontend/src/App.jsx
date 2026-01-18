import { BrowserRouter as Router, Routes, Route } from "react-router";
import Header from "./components/Header"
import Home from "./pages/Home"

function App() {

  return (
    <Router>
      {/* Shared Header */}
      <Header />

      {/* Route content */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
