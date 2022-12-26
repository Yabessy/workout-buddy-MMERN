import { useState } from "react"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(email, password);
  }
  return (
    <div className="w-full h-96 flex justify-center items-center">
      <form onSubmit={handleSubmit} className="w-96 h-80 shadow-md px-5 py-10 bg-white flex flex-col ">
        <h3 className="font-bold text-lg mb-5">Login</h3>
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
        <button type="submit" className="bg-blue-400 text-white  w-32 py-2 shadow rounded mt-5">Login</button>
      </form>
    </div>
  )
}
