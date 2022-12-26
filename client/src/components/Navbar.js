import { Link } from "react-router-dom"
import { useLogout } from "../hooks/useLogout"

export default function Navbar() {
  const { logout } = useLogout()
  const handleClick = () => {
    logout()
  }
  return (
    <header>
      <div className="bg-white w-full flex justify-between h-24 px-24 pt-7 font-bold text-2xl">
        <Link to="/">
          <h1>WorkOut Buddy</h1>
        </Link>
        <nav className="h-full text-base flex items-center space-x-2 font-medium">
          <div>
            <button onClick={handleClick} className="border-2 border-blue-300 px-4 py-1 mx-2">LogOut</button>
          </div>
          <div className="flex space-x-2">
            <Link className="hover:underline" to="/login">
              Login
            </Link>
            <Link className="hover:underline" to="/signup">
              Sign up
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
