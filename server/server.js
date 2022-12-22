require("dotenv").config()
const express = require("express")

const app = express()
const mongoose = require("mongoose")
const workoutRoutes = require("./routes/workouts")

// middleware
app.use(express.json())
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use("/api/workouts", workoutRoutes)

// connect to db
mongoose
  .connect(process.env.DB)
  .then(() => {
    // listen
    app.listen(process.env.PORT, () => {
      console.log("Server connect to db & running on port", process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })
