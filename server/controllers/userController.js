import bcrypt from "bcrypt"
import validator from "validator"
const { isEmail, isStrongPassword } = validator
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export const signup = async (req, res) => {
  const { email, password } = req.body
  const userExists = await prisma.user.findUnique({
    where: {
      email: email,
    },
  })
  if (userExists) {
    res.status(400).json({ error: "User already exists" })
    return
  }
  if (!isEmail(email)) {
    res.status(400).json({ error: "Invalid email" })
    return
  }
  if (!isStrongPassword(password)) {
    res.status(400).json({ error: "Password not strong enough at least 1Uppercase, 1Number, 1Symbol" })
    return
  }
  const hashedPassword = await bcrypt.hash(password, 10)
  try {
    const user = await prisma.user.create({
      data: {
        email: email,
        password: hashedPassword,
      },
    })
    res.status(201).json(user)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

export const login = async (req, res) => {
  const { email, password } = req.body
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  })
  if (!user) {
    res.status(400).json({ error: "User does not exist" })
    return
  }
  const passwordMatch = await bcrypt.compare(password, user.password)
  if (!passwordMatch) {
    res.status(400).json({ error: "Invalid password" })
    return
  }
  res.status(200).json(user)
}
