import { useAuthContext } from "./useAuthContext"
import { useWorkoutsContext } from "./useWorkoutContext"

export function useSignout() {
  const { dispatch } = useAuthContext()
  const { dispatch: dispatchWorkouts } = useWorkoutsContext()
  const signout = () => {
    localStorage.removeItem("user")
    dispatch({ type: "LOGOUT" })
    dispatchWorkouts({ type: "READ_WORKOUTS", payload: null })
  }
  return { signout }
}
