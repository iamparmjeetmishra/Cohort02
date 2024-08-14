const JWT_SECRET = require('./config')
const jwt = require("jsonwebtoken")

const authMiddleware = (req, res, next) => {
   const authHeader = req.headers.authorization

   if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(403).json({message: 'Auth failed'})
   }

   const token = authHeader.split(' ')[1]

   // console.log('Error from auth decoded before try')
   try {
      // console.log('Error from auth decoded start')
      const decoded = jwt.verify(token, JWT_SECRET)
      console.log(decoded)
      // console.log('Error from auth decoded outside')
      if (decoded.userId) {
         req.userId = decoded.userId
         next()
         // console.log('Error from auth decoded')
      } 
      //else {
      //    return res.status(403).json({
      //       msg: 'failed to get userid'
      //    })
      // }


   } catch (error) {
      return res.status(403).json({
         message: 'Failed to decode',
         error
      })
   }
}

module.exports = {
   authMiddleware
}