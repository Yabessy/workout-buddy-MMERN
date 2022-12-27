import { useState } from "react"
import { useSignup } from "../hooks/useSignup"

export default function Signup() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { signup, loading, error } = useSignup()
  const handleSubmit = async (e) => {
    e.preventDefault()
    await signup(email, password)
  }
  return (
    <div className="w-full h-96 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="w-96 h-auto shadow-md px-5 py-10 bg-white flex flex-col ">
        <h3 className="font-bold text-lg mb-5">Sign up</h3>
        <label>Email:</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="border-2 mb-2"
        />
        <label>Password:</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className="border-2 mb-2"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-400 text-white  w-32 py-2 shadow rounded mt-5">
          Signup
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  )
}
