import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Signup from "./pages/Signup"
import Login from "./pages/Login"

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar />
        <div className="bg-gray-50 px-24 py-10 h-[720px] w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />   
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
