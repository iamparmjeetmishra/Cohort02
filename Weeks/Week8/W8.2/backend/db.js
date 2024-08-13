const mongoose = require('mongoose')
require('dotenv').config()
const DB_URL = process.env.MONGODB_URL
// console.log(DB_URL)
mongoose.connect(DB_URL)

const userSchema = mongoose.Schema({
   username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      minLength: 2,
      maxLength: 30
   },
   password: {
      type: String,
      required: true,
      minLength: 6
   },
   firstName: {
      type: String,
      required: true,
      trim: true,
      maxLength: 50
   },
   lastName: {
      type: String,
      required: true,
      trim: true,
      maxLength: 50
   }
})

const User = mongoose.model('User', userSchema)


const accountSchema = new mongoose.Schema({
   userId: {
      type: mongoose.Schema.Types.ObjectId, // Reference to user model
      ref: 'User',
      required: true
   },
   balance: {
      type: Number,
      required: true
   }
})

const Account = mongoose.model('Account', accountSchema)


module.exports = {
   User,
   Account
}