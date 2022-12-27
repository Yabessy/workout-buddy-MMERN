import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import workoutRoute from "./routes/workoutRoute.js"
import userRoutes from './routes/userRoutes.js'
dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

app.use('/api/workouts', workoutRoute)
app.use('/api/users', userRoutes)

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`)
})
