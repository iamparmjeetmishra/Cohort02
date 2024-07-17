const express = require('express')

const app = express()
app.use(express.json())

const users = [{
   name: 'Henry',
   kidneys: [{
      healthy: false,
   }]
}]


app.get('/', (req, res) => {
   const henryKidneys = users[0].kidneys
   const numOfKidneys = henryKidneys.length
   let numOfHealthyKidneys = 0
   for (let i = 0; i < henryKidneys.length; i++) {
      if (henryKidneys[i].healthy) {
         numOfHealthyKidneys = numOfHealthyKidneys + 1
      }
   }

   const numOfUnhealthyKidney = numOfKidneys - numOfHealthyKidneys
   res.json({
      henryKidneys,
      numOfKidneys,
      numOfHealthyKidneys,
      numOfUnhealthyKidney
   })
})


app.post('/', (req, res) => {
   console.log(req.body)
   const isHealthy = req.body.isHealthy
   users[0].kidneys.push({
      healthy: isHealthy
   })

   res.json({
      msg: 'post done'
   })
})

app.put('/', (req, res) => {
   for (let i = 0; i < users[0].kidneys.length; i++) {
      users[0].kidneys[i].healthy = true
   }
   res.json({
      msg: 'Put update'
   })
})


// return 411 only if atleast one unhealthy kidney is there to do this. else return 411

app.delete("/", (req, res) => {

   if (isThereAtleastOneUnhealthyKindey()) {
      const newKidneys = [];
      for (let i = 0; i < users[0].kidneys.length; i++) {
         if (users[0].kidneys[i].healthy) {
            newKidneys.push({
               healthy: true
            })
         }
      }
      users[0].kidneys = newKidneys
      res.json({
         msg: 'delete done'
      })
   } else {
      res.status(411).json({
         msg: 'There is no unhealthy kidney'
      })
   }


})

function isThereAtleastOneUnhealthyKindey() {
   let atleastOneHealthyKidney = false
   for (let i = 0; i < users[0].kidneys.length; i++) {
      if (users[0].kidneys[i].healthy) {
         newKidneys.push({
            healthy: true
         })
      }
   }
   return atleastOneHealthyKidney
}


app.listen(3000)