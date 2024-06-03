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


// 2nd Way


// function calcArithmetic(a, b, type) {
//    if (type == 'sum') {
//       return sum(a,b)
//    }

//    if (type == 'minus') {
//       return minus(a,b)
//    }
// }

// function sum(a, b) {
//    return a + b
// }

// function minus(a, b) {
//    return a - b
// }

// const value1 = calcArithmetic(2, 3, 'sum')
// console.log(value1)



// 3rd Way - Sort of Callback


function calcArithmetic(a, b, typeFn) {
   const ans = typeFn(a, b)
   return ans
}

function sum(a, b) {
   return a + b
}

function minus(a, b) {
   return a - b
}

const value1 = calcArithmetic(2, 3, sum)
console.log(value1)


//
