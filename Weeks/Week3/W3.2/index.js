const jwt = require('jsonwebtoken')

const jwtSecret = 'secret'

const contents = {
   name: 'john',
   accountNum: 123123
}

// const newToken = jwt.sign(contents, jwtSecret)
// console.log(newToken)

let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiam9obiIsImFjY291bnROdW0iOjEyMzEyMywiaWF0IjoxNzIxODMyMzA5fQ.ctUWSY7CvUMCtE0_Q4RBx4ZIOrn9HfI4wHI5qNA7oj0'

let verifyToken = jwt.verify(token, jwtSecret)

console.log(verifyToken)