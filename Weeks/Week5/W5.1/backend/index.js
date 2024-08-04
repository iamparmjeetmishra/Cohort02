const express = require('express')
const cors = require('cors')
const { createTodo, updateTodo } = require('./types')
const {todo } = require('./db')
const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (res, req) => {
   req.json('Hi there from w5')
})

app.post('/todo', async (req, res) => {
   const createPayload = req.body
   const parsedPayload = createTodo.safeParse(createPayload)

   if (!parsedPayload.success) {
      res.status(411).json({
         msg: 'You sent the wrong inputs'
      })
      return 
   }

   // save into db
   await todo.create({
      title: createPayload.title,
      description: createPayload.description
   })
   res.json({
      msg: 'Todo Created'
   })


})

app.get('/todos', async (req, res) => {
   const todos = await todo.find({})
   res.json({
      todos
   })
})


app.put('/completed', async (req, res) => {
   const updatePayload = req.body
   const parsedPayload = updateTodo.safeParse(updatePayload)
   if (!parsedPayload.success) {
      res.status(411).json({
         msg: 'You send the wrong inputs from put'
      })
      return
   }
   await todo.update({
      __id: req.body.id
   }, {
      completed: true
   })

   res.json({
      msg: 'Todo marked as completed'
   })
})

app.listen(3000)