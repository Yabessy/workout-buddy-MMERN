import { useState } from "react"
import Moment from "react-moment"
import { useWorkoutsContext } from "../hooks/useWorkoutContext"
import UpdateWorkoutModal from "./UpdateWorkoutModal"

export default function WorkoutDetails({ workout }) {
  const { dispatch } = useWorkoutsContext()
  const [showModal, setShowModal] = useState(false)
  const handleClick = async () => {
    const res = await fetch(
      `http://localhost:3000/api/workouts/${workout.id}`,
      {
        method: "DELETE",
      }
    )
    const json = await res.json()
    if (res.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: json })
    }
  }
  return (
    <div className="mb-4 bg-white p-5 relative shadow-md rounded-md">
      <h4 className="font-bold text-2xl mb-4 text-blue-400 drop-shadow-sm`">
        {workout.title}
      </h4>
      <p className="text-lg font-medium  leading-6">
        <strong> Load (kg): </strong> {workout.load}
      </p>
      <p className="text-lg font-medium  leading-6">
        <strong> Reps: </strong> {workout.reps}
      </p>
      <p className="text-base font-medium mt-1">
        <Moment fromNow>{workout.createdAt}</Moment>
      </p>
      <span
        onClick={handleClick}
        className={`absolute top-3 right-5 bg-blue-400 text-white px-2 py-0.5  rounded-md shadow cursor-pointer hover:shadow-none`}>
        delete
      </span>
      <span
        onClick={()=> setShowModal(!showModal)}
        className={`absolute top-3 right-24  bg-blue-400 text-white px-2 py-0.5  rounded-md shadow cursor-pointer hover:shadow-none`}>
        update
      </span>
      <UpdateWorkoutModal showModal={showModal} setShowModal={setShowModal} workout={workout} />
    </div>
  )
}
