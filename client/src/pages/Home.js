import { useEffect } from "react"
import { useWorkoutContext } from "../hooks/useWorkoutContext"
import { useAuthContext } from "../hooks/useAuthContext"
import WorkoutDetails from "../components/WorkoutDetails"
import WorkoutForm from "../components/WorkoutForm"

export default function Home() {
  const { workouts, dispatch } = useWorkoutContext()
  const { user } = useAuthContext()
  useEffect(() => {
    const fetchWorkouts = async () => {
      const res = await fetch("/api/workouts",{
        headers: {
          'authorization': `Bearer ${user.token}`
        }
      })
      const json = await res.json()
      if (res.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: json })
        console.log(json)
      }
    }
    if(user){
      fetchWorkouts()
    }
  }, [dispatch,user])
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
