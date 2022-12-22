
export default function WorkoutDetails({workout}) {
  return (
    <div className='mb-4 bg-white p-5 relative shadow-md rounded-md'>
        <h4 className='font-bold text-2xl mb-4 text-blue-400'>{workout.title}</h4>
        <p className='text-lg font-medium  leading-6'><strong> Load (kg): </strong> {workout.load}</p>
        <p className='text-lg font-medium  leading-6'><strong> Reps: </strong> {workout.reps}</p>
        <p className='text-base font-medium mt-1'>{workout.createdAt}</p>
    </div>
  )
}
