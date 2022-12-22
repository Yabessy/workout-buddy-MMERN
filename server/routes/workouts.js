const express = require("express")
const {
  addWorkout,
  getAllWorkouts,
  getSingleWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController")

const router = express.Router()

router.get("/", getAllWorkouts)
router.get("/:id", getSingleWorkout)
router.post("/", addWorkout)
router.delete("/:id", deleteWorkout)
router.patch("/:id", updateWorkout)
module.exports = router
