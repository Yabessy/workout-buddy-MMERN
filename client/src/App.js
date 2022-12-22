import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar />
        <div className="bg-gray-50 px-24 py-10 h-[720px] w-full">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
