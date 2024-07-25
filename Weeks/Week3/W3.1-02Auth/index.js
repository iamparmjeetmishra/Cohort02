const express = require('express')
const jwt = require('jsonwebtoken')
const jwtPass = '123456'

const app = express()

app.use(express.json()  )

const ALL_USERS = [
   {
      username: "johnwick@gmail.com",
      password: "123",
      name: 'John wick'
   },
   {
      username: 'raman@gmail.com',
      password: '1234',
      name: 'Raman Singh'
   },
]

function userExists(username, password) {
   // write logic to return t/f if this user exists
   // in ALL_ users Array
   let userExists = false
   // ALL_USERS.filter(user => user.username === username && user.password == password ? userExists = true : userExists = false)


   for (let i = 0; i < ALL_USERS.length; i++) {
      if (ALL_USERS[i].username == username && ALL_USERS[i].password == password) {
         userExists = true
      }
   }

   return userExists 
}


app.post('/signin', (req, res) => {
   const username = req.body.username
   const password = req.body.password

   if (!userExists(username, password)) {
      return res.status(403).json({
         msg:'User does not exist'
      })
   }

   var token = jwt.sign({ username: username }, jwtPass)
   return res.json({
      token,
   })
})


app.get('/', (req, res) => {
   res.send('hi')
})

app.get('/users', (req, res) => {
   const token = req.headers.authorization
   try {
      const decoded = jwt.verify(token, jwtPass)
      const username = decoded.username
      res.json({
         users: ALL_USERS.filter((value) => {
            if (value.username == username) {
               return true
            } else {
               return false
            }
         })
      })
   } catch (error) {
      return res.status(403).json({
         msg: 'Invalid token'
      })
   }
})


app.listen(3000)