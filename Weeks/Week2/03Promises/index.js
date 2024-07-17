// Promises

// 1st

function myOwnSetTimeout(fn, duration) {
   setTimeout(fn, duration)
}

// myOwnSetTimeout(function () {
//    console.log('hi')
// }, 1000)

myOwnSetTimeout(function () {
   console.log('first thing')
   myOwnSetTimeout(function () {
      console.log("second things")
   }, 2000)
}, 1000)