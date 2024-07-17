// Callback
function square(n) {
   return n * n
}

function cube(n) {
   return n*n*n
}

function quad(n) {
   return n * n * n *n
}

// generic
function sumOfSquare(a, b, func) {
   let square1 = func(a)
   let square2 = func(b)
   return square1 + square2
}

let ans = sumOfSquare(2, 3, square)
console.log(ans)