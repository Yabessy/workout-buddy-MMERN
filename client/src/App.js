import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Navbar from "./components/Navbar"
import { useAuthContext } from "./hooks/useAuthContext"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"

function App() {
  const { user } = useAuthContext()
  return (
    <div className="">
      <BrowserRouter>
        <Navbar />
        <div className="bg-gray-50 px-24 py-10 h-[720px] w-full">
          <Routes>
            <Route
              path="/"
              element={user ? <Home /> : <Navigate to={"/login"} />}
            />
            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to={"/"} />}
            />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to={"/"} />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
