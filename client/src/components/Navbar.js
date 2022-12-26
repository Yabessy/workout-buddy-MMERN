import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <header>
      <div className="bg-white w-full flex justify-between h-24 px-24 pt-7 font-bold text-2xl">
        <Link to="/">
            <h1>WorkOut Buddy</h1>
        </Link>
        <nav>
          <div className="text-base flex space-x-2 font-medium">
            <Link className="hover:underline" to="/login">Login</Link>
            <Link className="hover:underline" to="/signup">Sign up</Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
