// backend/routes/user/js
const express = require('express')
const router = express.Router()
const zod = require('zod')
const jwt = require('jsonwebtoken')

const JWT_SECRET = require('../config.js')
const { User, Account } = require('../db.js')
const { authMiddleware } = require('../middleware.js')


// signup and signin routes

const signupSchema = zod.object({
   username: zod.string().email({message: 'Please enter a valid email'}),
   firstName: zod.string().min(2, 'first name must be 2 characters long'),
   lastName: zod.string(),
   password: zod.string().min(5, 'Please enter a strong password')
})

router.post('/signup', async (req, res) => {
   const body = req.body
   const { success } = signupSchema.safeParse(body)
   if (!success) {
      return res.status(411).json({
         message: 'SignUp-not success'
      })
   }

   const existingUser = await User.findOne({
      username: body.username
   })

   if (existingUser) {
      console.log('HEre')
      return res.status(411).json({
         message: 'Email Already Taken/Incorrect inputs'
      })
   }

   const user = await User.create({
      username: body.username,
      password: body.password,
      firstName: body.firstName,
      lastName: body.lastName
   })

   const userId = user._id

   await Account.create({
      userId,
      balance: 1 + Math.random() * 10000
   })

   const token = jwt.sign({
      userId
   }, JWT_SECRET)

   res.json({
      message: 'User Created Successfully',
      token: token
   })

})


const signinBody = zod.object({
   username: zod.string().email(),
   password: zod.string()
})


router.post('/signin', async (req, res) => {
   const { success } = signinBody.safeParse(req.body)
   if (!success) {
      return res.status(411).json({
         message: 'Sign->Incorrect User Inputs'
      })
   }

   const user = await User.findOne({
      username: req.body.username,
      password: req.body.password
   })

   if (user) {
      const token = jwt.sign({
         userId: user._id
      }, JWT_SECRET)

      res.json({
         token: token,
         message: 'Login'
      })

      return
   }

   res.status(411).json({
      message: 'Signin->Err while logging in'
   })
})

// Auth Routes and Udpate the user

const updateBody = zod.object({
   password: zod.string().optional(),
   firstName: zod.string().optional(),
   lastName: zod.string().optional()
})

router.put('/', authMiddleware, async (req, res) => {
   const { success } = updateBody.safeParse(req.body)
   
   if (!success) {
      res.status(411).json({
         message: 'Update->Error while updating information'
      })
   }

   await User.updateOne({ _id: req.userId }, req.body)
   
   res.json({
      message: 'Updated successfully'
   })

})


// Filter user 

router.get('/bulk', async (req, res) => {
   const filter = req.query.filter || ''
   const users = await User.find({
      $or: [{
         firstName: {
            "$regex": filter
         }
      }, {
         lastName: {
            "$regex": filter
         }
      }]
   })
   
   const account = await Account.findOne({
      userId: req.users
   })

   res.json({
      user: users.map(user => ({
         username: user.username,
         firstName: user.firstName,
         lastName: user.lastName,
         _id: user._id
      }))
   })


})


module.exports = router;

// /api/v1/user