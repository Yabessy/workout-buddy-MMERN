import { useWorkoutContext } from "../hooks/useWorkoutContext";
export default function WorkoutDetails({ workout }) {
  const { dispatch } = useWorkoutContext();
  const handleClick = async () => {
    const res = await fetch(`/api/workouts/${workout._id}`, {
      method: "DELETE",
    })
    const json = await res.json()
    if(res.ok){
      dispatch({type:"DELETE_WORKOUT",payload:json})
    }
  }
  return (
    <div className="mb-4 bg-white p-5 relative shadow-md rounded-md">
      <h4 className="font-bold text-2xl mb-4 text-blue-400">{workout.title}</h4>
      <p className="text-lg font-medium  leading-6">
        <strong> Load (kg): </strong> {workout.load}
      </p>
      <p className="text-lg font-medium  leading-6">
        <strong> Reps: </strong> {workout.reps}
      </p>
      <p className="text-base font-medium mt-1">{workout.createdAt}</p>
      <span onClick={handleClick}>delete</span>
    </div>
  )
}
