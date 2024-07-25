const ALL_USERS = [
   {
      username: "johnwick@gmail.com",
      password: "123",
      name: 'John wick'
   },
   {
      username: 'raman@gmail.com',
      password: '1234',
      name: 'Raman Singh'
   },
]

let user = ALL_USERS.map(user => user.username && user.password ? console.log('hi') : 'null')

console.log(user)