// Map filter and arrow fns

let arr = [1, 2, 3, 4, 5, 6]

const doubleArr = (arr) => {
   return arr.map(arr => arr * 2)
}

console.log(doubleArr(arr))