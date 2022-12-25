const bcrypt = require("bcrypt")
const { isEmail, isStrongPassword } = require("validator")
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
})

userSchema.statics.signup = async function (email, password) {
  if (!email || !password) throw Error("Email and password are required")
  if (!isEmail(email)) throw Error("Email is not valid")
  if (
    !isStrongPassword(password, {
      minLength: 8,
      minUppercase: 1,
      minNumbers: 1,
    })
  ) {
    throw Error("Password is not strong enough")
  }

  const exist = await this.findOne({ email })
  if (exist) {
    throw Error("User already exists")
  }
  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)
  const user = await this.create({ email, password: hash })
  return user
}

userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("Email and password are required")
  }
  const user = await this.findOne({ email })
  if (!user) throw Error("Incorect Email")
  const match = await bcrypt.compare(password, user.password)
  if(!match) throw Error('Incorect password')
  return user
}

module.exports = mongoose.model("User", userSchema)
