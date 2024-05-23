let fName = 'John'
let age = 18
let isMarried = true

if (isMarried == true) {
   console.log(fName + " is married")
} else {
   console.log(fName + " is not married")
}

// Loop
let ans = 0

for (let i = 0; i <= 5; i++) {
   ans = ans + i
   console.log(i)
}

console.log(ans)

// Array
console.log('ARRAY')

const ages = [21, 22, 23, 24, 25, 26]
const numberOfPeople = ages.length

for (let i = 0; i <= numberOfPeople; i++) {
   if (ages[i] % 2 === 0) {
      console.log(ages[i])
   }
}

// Objects
console.log('OBJECTS')

const allUsers = [
   {
      fName: 'John',
      gender: 'male'
   },
   {
      fName: 'Bat',
      gender: 'male'
   },
   { fName: 'Nancy', gender: 'female'}
]

for (let i = 0; i <= allUsers.length; i++) {
   if (allUsers[i]['gender'] == 'male') {
      console.log(allUsers[i])
      console.log(allUsers[i]['fName'])
   }
}