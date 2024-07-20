// Map filter and arrow fns

let arr = [1, 2, 3, 4, 5, 6]

const doubleArr = (arr) => {
   return arr.map(arr => arr * 2)
}

console.log(doubleArr(arr))

// Filter

const evenFilter = (arr) => {
   return arr.filter(arr => arr % 2 === 0)
}

console.log(evenFilter(arr))

const evenDouble = (arr) => {
   let filterArr = arr.filter(arr => arr % 2 === 0)
   return filterArr.map(arr => arr * 2)
}


console.log(evenDouble(arr))