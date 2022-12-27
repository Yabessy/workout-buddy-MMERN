import { useState } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutContext"

export default function UpdateWorkoutModal({
  showModal,
  setShowModal,
  workout,
}) {
  const { dispatch } = useWorkoutsContext()
  const [newtitle, setNewTitle] = useState(`${workout.title}`)
  const [newload, setNewLoad] = useState(`${workout.load}`)
  const [newreps, setNewReps] = useState(`${workout.reps}`)
  const [newerror, setNewError] = useState(null)
  const [newerrors, setNewErrors] = useState([])
  if (!showModal) return <></>
  const handleSubmit = async (e) => {
    e.preventDefault()
    const workouts = { newtitle, newload, newreps }
    const res = await fetch(
      `http://localhost:3000/api/workouts/${workout.id}`,
      {
        method: "PUT",
        body: JSON.stringify(workouts),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    const json = await res.json()
    if (!res.ok) {
      setNewError(json.error)
    }
    if (res.ok) {
      setNewError(null)
      setNewErrors([])
      dispatch({ type: "UPDATE_WORKOUT", payload: json })
      setShowModal(false)
    }
  }
  return (
    <div className="z-50 fixed inset-0 flex justify-center items-center w-screen h-screen bg-transparent backdrop-blur">
      <form
        className="w-96 h-auto mb-4 bg-white shadow-md p-5 relative rounded-md"
        onSubmit={handleSubmit}>
        <div className="flex items-center mb-4 space-x-2">
          <button
            type="button"
            onClick={() => setShowModal(false)}
            className="w-20 bg-blue-400 px-4 py-1 shadow-md rounded-lg">
            back
          </button>
          <h3 className="font-bold text-xl  text-blue-400">Update Workout</h3>
        </div>

        <label className="text-base font-medium ">Excercise Title :</label>
        <input
          type="text"
          value={newtitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="Type Your Excercise"
          className={`${
            newerrors.includes("Title") ? "border border-red-400" : ""
          } w-full h-9 px-3 mb-4 text-base placeholder-gray-600 border rounded-lg focus:outline-none focus:shadow-md`}
        />
        <label className="text-base font-medium ">Load (in Kg) :</label>
        <input
          type="number"
          value={newload}
          onChange={(e) => setNewLoad(e.target.value)}
          placeholder="Type Your Load"
          className={`${
            newerrors.includes("Load") ? "border border-red-400" : ""
          } w-full h-9 px-3 mb-4 text-base placeholder-gray-600 border rounded-lg focus:outline-none focus:shadow-md`}
        />
        <label className="text-base font-medium ">Reps :</label>
        <input
          type="number"
          value={newreps}
          onChange={(e) => setNewReps(e.target.value)}
          placeholder="Type Your Reps"
          className={`${
            newerrors.includes("Reps") ? "border border-red-400" : ""
          } w-full h-9 px-3 mb-4 text-base placeholder-gray-600 border rounded-lg focus:outline-none focus:shadow-md`}
        />
        <button
          type="submit"
          className="w-20 bg-blue-400 mt-2 mb-4 px-4 py-1 shadow-md rounded-lg">
          Update
        </button>
        {newerror && <p className="text-red-500">{newerror}</p>}
      </form>
    </div>
  )
}
