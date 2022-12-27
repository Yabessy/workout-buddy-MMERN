import { useEffect } from "react"
import WorkoutDetails from "../components/WorkoutDetails"
import WorkoutForm from "../components/WorkoutForm"
import { useWorkoutsContext } from "../hooks/useWorkoutContext"

export default function Home() {
  const { workouts, dispatch } = useWorkoutsContext()
  useEffect(() => {
    const fetchWorkouts = async () => {
      const res = await fetch("http://localhost:3000/api/workouts")
      const json = await res.json()
      if (res.ok){
        dispatch({ type: "READ_WORKOUTS", payload: json })
        console.log(json);
      }
    }
    fetchWorkouts()
  }, [dispatch])
  return (
    <div className="w-full grid grid-cols-4 gap-[50px]">
      <div className="col-span-3">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout.id} workout={workout} />
          ))}
      </div>
      <WorkoutForm />
    </div>
  )
}
