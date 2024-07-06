/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

// let word = 'fat'

// let revWord = word.split('').sort()
// console.log(revWord)

// const array1 = [1, 30, 4, 21, 100000];
// array1.sort();
// console.log(array1);

function isAnagram(str1, str2) {
  let w1 = str1.length
  let w2 = str2.length

  if (w1 !== w2) {
    // console.log('here 2')
    return false
  }

  if (str1.split('').sort().join() !== str1) {
    // console.log(true)
    return false
  } 

  return true

  
}

let check = isAnagram('tit', 'tit')

console.log(check)

module.exports = isAnagram;
