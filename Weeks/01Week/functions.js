// function sum(a, b) {
//    return a + b
// }

// // console.log(sum(3,4)) 

// function displayResult(data) {
//    console.log('Result of the sum is: ' + data)
// }

// function displayResultPassive(data) {
//    console.log('Sum Result is: ' + data)
// }

// const ans1 = sum(3, 4)
// displayResult(ans1)

// 2nd way

function sum(a, b, fnToCall) {
   let result = a + b
   fnToCall(result)
}

// console.log(sum(3,4)) 

function displayResult(data) {
   console.log('Result of the sum is: ' + data)
}

function displayResultPassive(data) {
   console.log('Sum Result is: ' + data)
}

const ans1 = sum(3, 4, displayResultPassive)

// Passing a function as argument

