import { useEffect } from "react"
import { useWorkoutContext } from "../hooks/useWorkoutContext"
import WorkoutDetails from "../components/WorkoutDetails"
import WorkoutForm from "../components/WorkoutForm"

export default function Home() {
  const {workouts,dispatch} = useWorkoutContext()
  useEffect(() => {
    const fetchWorkouts = async () => {
      const res = await fetch("/api/workouts")
      const json = await res.json()
      if (res.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: json })
        console.log(json);
      }
    }
    fetchWorkouts()
  },[dispatch])
  return (
    <div className="w-full grid grid-cols-4 gap-[50px]">
      <div className="col-span-3">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
      </div>
      <WorkoutForm />
    </div>
  )
}
