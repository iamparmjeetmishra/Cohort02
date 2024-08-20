import { Hono } from 'hono'

const app = new Hono()


async function authMiddleware(c: any, next:any) {
  if (c.req.header('Authorization')) {
    // do validation
    await next()
  } else {
    return c.text('You dont have access')
  }
}

app.use(authMiddleware)

app.get('/', async (c) => {
  // Here c does have request param and response params, middlewares, headers and body
  // const body = await c.req.json()
  // console.log(body)
  console.log(c.req.header('Authorization'))
  console.log(c.req.query('param'))


  return c.json({
    msg: 'Hi from hono!'
  })
})

app.post('/user', (c) => {
  return c.text('Hello from Hono post')
})

export default app