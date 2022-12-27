import { createContext, useReducer } from "react"

export const WorkoutsContext = createContext()

export const workoutsReducer = (state, action) => {
  switch (action.type) {
    case "CREATE_WORKOUT":
      return {
        workouts: [action.payload, ...state.workouts],
      }
    case "READ_WORKOUTS":
      return {
        workouts: action.payload,
      }
    case "UPDATE_WORKOUT":
      return {
        workouts: state.workouts.map((workout) => {
          if (workout.id === action.payload.id) {
            return action.payload
          }
          return workout
        }),
      }
    case "DELETE_WORKOUT":
      return {
        workouts: state.workouts.filter(
          (workout) => workout.id !== action.payload.id
        ),
      }
    default:
      return state
  }
}

export const WorkoutsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutsReducer, {
    workouts: null,
  })
  return (
    <WorkoutsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WorkoutsContext.Provider>
  )
}
