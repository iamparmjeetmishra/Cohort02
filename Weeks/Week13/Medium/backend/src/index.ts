import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/extension'
import { Pool, neon, neonConfig } from '@neondatabase/serverless'
import { PrismaNeon } from '@prisma/adapter-neon'
import ws from 'ws'
import dotenv from 'dotenv'

neonConfig.webSocketConstructor = ws;
const connectionString = `${process.env.DATABASE_URL}`;
console.log('ConnnString', connectionString)

const pool = new Pool({ connectionString })
console.log('pool', pool)

const adapter = new PrismaNeon(pool)
console.log('adapter', adapter)

const prisma = new PrismaClient({ adapter })

console.log('prisma', prisma)

// const prisma = new PrismaClient({
//   datasourceUrl: env.DATABASE_URL
// }).$extends(neon)

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
