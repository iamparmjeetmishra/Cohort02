const express = require('express')


const app = express()



app.get('/', (req, res) => {
   res.send('hi from doc')
})

function userMiddleware(req, res, next) {
   const username = req.headers.username
   const password = req.headers.password

   if (username != 'John' && password != 'pass') {
      res.status(403).json({
         'msg': 'Incorrect inputs'
      })
   } else {
      next()
   }
}

function kidneyMiddleware(req, res, next) {
   const kidneyId = req.query.kidneyId

   if (kidneyId != 1 && kidneyId != 2) { 
      res.status(403).json({
         msg: 'Wrong with your Kid'
      })
   } else next()
}

app.get('/health-checkup', userMiddleware, kidneyMiddleware, (req, res) => {
   
   res.json({
      'msg': 'Your Kidney is fine'
   })

})

// Global catch

app.use((err, req, res, next) => {
   res.status(500).json({
      msg: 'Sorry something wrong with the server'
   })
})


app.listen(3000)








// 1st Way

// const express = require('express')


// const app = express()

// // app.use(express.json()  )


// app.get('/', (req, res) => {
//    res.send('hi from doc')
// })

// app.get('/health-checkup', (req, res) => {
//    const username = req.headers.username
//    const password = req.headers.password
//    const kidneyId = req.query.kidneyId

//    if (username != 'John' && password != 'pass') {
//       res.status(400).json({
//          'msg': 'Something wrong with your inputs'
//       })
//       return
//    }

//    if (kidneyId != 1 && kidneyId != 2) { 
//       res.json({
//          msg: 'Wrong with your Kid'
//       })
//    }

//    res.json({
//       'msg': 'Your Kidney is fine'
//    })

// })

// app.listen(3000)