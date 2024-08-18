import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

// Login 
app.post('/api/v1/signup', (c) => {
  return c.text('signup route')
})

app.post('/api/v1/signin', (c) => {
  return c.text('signin route')
})


// Blog
app.get('/api/v1/blog/:id', (c) => {
  const id = c.req.param('id')
  console.log(id)
  return c.text(`get blog route: ${id}`)
})

//Creating blog route
app.post('/api/v1/blog', (c) => {
  return c.text('blog route')
})

//
app.put('/api/v1/blog', (c) => {
  return c.text('put route')
})


export default app
