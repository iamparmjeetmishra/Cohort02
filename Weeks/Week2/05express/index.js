const express = require('express')

function calcSum(n) {
   let ans = 0

   for (let i = 1; i <= n; i++) {
      ans = ans + 1
   }
   return ans
}

const app = express()

// app.get('/', (req, res) => {
//    res.send('hi')
// })

app.get('/', (req, res) => {
   // res.send('hi')
   const n = req.query.n
   const ans = calcSum(n)
   // res.send(ans)
   // res.send(ans.toString())
   res.send('Ans is :' + ans)
})

app.listen(3000)