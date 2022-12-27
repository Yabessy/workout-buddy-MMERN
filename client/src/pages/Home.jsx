import { useEffect, useState } from "react"
import WorkoutDetails from "../components/WorkoutDetails"
import WorkoutForm from "../components/WorkoutForm"

export default function Home() {
  const [workouts, setWorkouts] = useState([])
  useEffect(() => {
    const fetchWorkouts = async () => {
      const res = await fetch("http://localhost:3000/api/workouts")
      const data = await res.json()
      setWorkouts(data)
    }
    fetchWorkouts()
  }, [])
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
