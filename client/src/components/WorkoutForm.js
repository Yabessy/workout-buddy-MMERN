import { useState } from "react"
import { useWorkoutContext } from "../hooks/useWorkoutContext"

export default function WorkoutForm() {
  const { dispatch } = useWorkoutContext()
  const [title, setTitle] = useState("")
  const [load, setLoad] = useState("")
  const [reps, setReps] = useState("")
  const [errors, setErrors] = useState([])
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const workout = { title, load, reps }
    const res = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    })
    const json = await res.json()
    if (!res.ok) {
      setErrors(json.errors)
      setError(json.error)
    }
    if (res.ok) {
      setLoad("")
      setReps("")
      setTitle("")
      setErrors(null)
      setError([])
      dispatch({ type: "ADD_WORKOUT", payload: json })
    }
  }

  return (
    <form
      className="col-span-1 h-[500px] mb-4 bg-transparent p-5 relative rounded-md"
      onSubmit={handleSubmit}>
      <h3 className="font-bold text-xl mb-5 text-blue-400">Add New Workout</h3>

      <label className="text-base font-medium ">Excercise Title :</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Type Your Excercise"
        className={`${
          errors && errors.includes("Title") ? "border border-red-400" : ""
        } w-full h-9 px-3 mb-4 text-base placeholder-gray-600 border rounded-lg focus:outline-none focus:shadow-md`}
      />
      <label className="text-base font-medium ">Load (in Kg) :</label>
      <input
        type="number"
        value={load}
        onChange={(e) => setLoad(e.target.value)}
        placeholder="Type Your Load"
        className={`${
          errors && errors.includes("Load") ? "border border-red-400" : ""
        } w-full h-9 px-3 mb-4 text-base placeholder-gray-600 border rounded-lg focus:outline-none focus:shadow-md`}
      />
      <label className="text-base font-medium ">Reps :</label>
      <input
        type="number"
        value={reps}
        onChange={(e) => setReps(e.target.value)}
        placeholder="Type Your Reps"
        className={`${
          errors && errors.includes("Reps") ? "border border-red-400" : ""
        } w-full h-9 px-3 mb-4 text-base placeholder-gray-600 border rounded-lg focus:outline-none focus:shadow-md`}
      />
      <button
        type="submit"
        className="w-20 bg-blue-400 mt-2 mb-4 px-4 py-1 shadow-md rounded-lg">
        Add
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  )
}
