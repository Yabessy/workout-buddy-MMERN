import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import workoutRoute from "./routes/workoutRoute.js"
dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/workouts', workoutRoute)

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`)
})
