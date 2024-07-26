const jwt = require('jsonwebtoken')

const jwtSecret = 'secret'

// const contents = {
//    name: 'john',
//    accountNum: 123123
// }

let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiam9obiIsImFjY291bnROdW0iOjEyMzEyMywiaWF0IjoxNzIxODMxNzc3fQ.S62qcQKAqKf77795mEm3CYXgQOWW - T7oTuTIOvMTsSs'

const tokenVerify = jwt.verify(token , jwtSecret)

console.log(tokenVerify)


// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiam9obiIsImFjY291bnROdW0iOjEyMzEyMywiaWF0IjoxNzIxODMxNzc3fQ.S62qcQKAqKf77795mEm3CYXgQOWW - T7oTuTIOvMTsSs