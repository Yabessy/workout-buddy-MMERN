import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export const createWorkout = async (req, res) => {
  const user_id = req.user_id
  const { title, load, reps } = req.body
  try {
    const workout = await prisma.workouts.create({
      data: {
        user_id: Number(user_id),
        title: title,
        load: Number(load),
        reps: Number(reps),
      },
    })
    res.status(201).json(workout)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}
export const readWorkouts = async (req, res) => {
  const User_id = req.user_id
  try {
    const response = await prisma.workouts.findMany({
      where: {
        user_id: Number(User_id),
      },
    })
    res.status(200).json(response)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
export const readWorkout = async (req, res) => {
  try {
    const response = await prisma.workouts.findUnique({
      where: {
        id: Number(req.params.id),
      },
    })
    res.status(200).json(response)
  } catch (err) {
    res.status(404).json({ error: err.message })
  }
}
export const updateWorkout = async (req, res) => {
  const { newtitle, newload, newreps } = req.body
  try {
    const workout = await prisma.workouts.update({
      where: {
        workout_id: Number(req.params.id),
      },
      data: {
        title: newtitle,
        load: Number(newload),
        reps: Number(newreps),
      },
    })
    res.status(200).json(workout)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}
export const deleteWorkout = async (req, res) => {
  try {
    const workout = await prisma.workouts.delete({
      where: {
        workout_id: Number(req.params.id),
      },
    })
    res.status(200).json(workout)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}
