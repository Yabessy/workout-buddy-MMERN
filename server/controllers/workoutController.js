const Workout = require("../models/workoutModel")
const mongoose = require("mongoose")

const getAllWorkouts = async (req, res) => {
  const user_id = req.user._id
  const workouts = await Workout.find({user_id}).sort({ createdAt: -1 })
  res.status(200).json(workouts)
}

const getSingleWorkout = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(404).json({ error: "Workout not found" })
  }
  const workout = await Workout.findById(req.params.id)
  if (!workout) {
    return res.status(404).json({ error: "Workout not found" })
  }
  res.status(200).json(workout)
}

const addWorkout = async (req, res) => {
  const { title, reps, load } = req.body
  let errors = []
  if (!title) {
    errors.push("Title")
  }
  if (!reps) {
    errors.push("Reps")
  }
  if (!load) {
    errors.push("Load")
  }
  if (errors.length > 0) {
    return res
      .status(400)
      .json({ error: `Please enter ${errors.join(", ")}`, errors })
  }
  try {
    const user_id = req.user._id
    const workout = await Workout.create({ title, reps, load, user_id })
    res.status(200).json(workout)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const deleteWorkout = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(404).json({ error: "Workout not found" })
  }
  const workout = await Workout.findByIdAndDelete(req.params.id)
  if (!workout) {
    return res.status(404).json({ error: "Workout not found" })
  }
  res.status(200).json(workout)
}

const updateWorkout = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(404).json({ error: "Workout not found" })
  }
  const workout = await Workout.findByIdAndUpdate(
    { _id: req.params.id },
    {
      ...req.body,
    }
  )
  if (!workout) {
    return res.status(404).json({ error: "Workout not found" })
  }
  res.status(200).json(workout)
}

module.exports = {
  getAllWorkouts,
  getSingleWorkout,
  addWorkout,
  deleteWorkout,
  updateWorkout,
}
