import { useState } from "react"
import { useAuthContext } from "./useAuthContext"
export function useSignup() {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const { dispatch } = useAuthContext()
  const signup = async (email, password) => { 
    setLoading(true)
    setError(null)
    const res = await fetch("/api/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
    const json = await res.json()
    if (!res.ok) {
      setLoading(false)
      setError(json.error)
    }
    if (res.ok) {
      localStorage.setItem("user", JSON.stringify(json))
      dispatch({ type: "LOGIN", payload: json })
      setLoading(false)
      setError(null)
    }
  }
  return { signup, error, loading }
}
