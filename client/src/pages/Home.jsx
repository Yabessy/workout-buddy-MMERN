import { useEffect } from "react"
import WorkoutDetails from "../components/WorkoutDetails"
import WorkoutForm from "../components/WorkoutForm"
import { useWorkoutsContext } from "../hooks/useWorkoutContext"
import { useAuthContext } from "../hooks/useAuthContext"

export default function Home() {
  const { user } = useAuthContext()
  const { workouts, dispatch } = useWorkoutsContext()
  useEffect(() => {
    const fetchWorkouts = async () => {
      const res = await fetch("http://localhost:3000/api/workouts", {
        headers: {
          user_id: user.user_id,
        },
      })
      const json = await res.json()
      if (res.ok) {
        dispatch({ type: "READ_WORKOUTS", payload: json })
        console.log(json)
      }
    }
    if (user) {
      fetchWorkouts()
    }
  }, [dispatch, user])
  return (
    <div className="w-full grid grid-cols-4 gap-[50px]">
      <div className="col-span-3">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout.workout_id} workout={workout} />
          ))}
      </div>
      <WorkoutForm />
    </div>
  )
}
