/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
   let biggestEl = 0
   for (let i = 0; i < numbers.length; i++) {
      if (biggestEl < numbers[i]) {
         biggestEl = numbers[i]
      }
   }
   console.log(biggestEl)
   return biggestEl
}

// findLargestElement([1,2,3,4, 99])

module.exports = findLargestElement;