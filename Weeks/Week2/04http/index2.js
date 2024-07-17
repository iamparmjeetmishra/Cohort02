const express = require("express");

const app = express()

const port = 3000

app.get('/route-handler', (req, res) => {
   // Headers, body, query 
   // do machine lm
   // res.send('Hello Index2')
   res.json({
      name: 'John',
      company: 'killing'
   })
})

app.listen(port)