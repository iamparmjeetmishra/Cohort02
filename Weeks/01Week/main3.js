// function calcArithmetic(a, b, type) {
//    let result = a + b
//    if (type == 'sum') {
//       return a + b
//    }

//    if (type == 'minus') {
//       return b - a
//    }
// }

// const value1 = calcArithmetic(2, 2, 'sum')
// console.log(value1, type)

function calcArithmetic(a, b, type) {
   let result = a + b
   if (type == 'sum') {
      return a + b
   }

   if (type == 'minus') {
      return b - a
   }
}

const value1 = calcArithmetic(2, 2, 'sum')
console.log(value1, value1.type)