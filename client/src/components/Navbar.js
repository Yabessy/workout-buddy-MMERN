import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <header>
      <div className="bg-white w-full h-24 px-24 pt-7 font-bold text-2xl">
        <Link to="/">
            <h1>WorkOut Buddy</h1>
        </Link>
      </div>
    </header>
  )
}
