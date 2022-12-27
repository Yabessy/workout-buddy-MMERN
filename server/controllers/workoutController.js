import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body
  try {
    const workout = await prisma.workout.create({
      data: {
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
  try {
    const response = await prisma.workout.findMany()
    res.status(200).json(response)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
export const readWorkout = async (req, res) => {
  try {
    const response = await prisma.workout.findUnique({
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
    const workout = await prisma.workout.update({
      where: {
        id: Number(req.params.id),
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
    const workout = await prisma.workout.delete({
      where: {
        id: Number(req.params.id),
      },
    })
    res.status(200).json(workout)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}
