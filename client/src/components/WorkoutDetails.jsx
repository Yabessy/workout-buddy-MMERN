import Moment from "react-moment"

export default function WorkoutDetails({workout}) {
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
        // onClick={handleClick}
        className={`absolute top-3 right-5 bg-blue-400 text-white px-2 py-0.5  rounded-md shadow cursor-pointer hover:shadow-none`}>
        delete
      </span>
    </div>
  )
}
