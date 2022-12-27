import express from "express"
import {
    createWorkout,
    readWorkout,
    readWorkouts,
    updateWorkout,
    deleteWorkout,
} from "../controllers/workoutController.js"

const router = express.Router()

router.post("/", createWorkout)
router.get("/", readWorkouts)
router.get("/:id", readWorkout)
router.put("/:id", updateWorkout)
router.delete("/:id", deleteWorkout)

export default router