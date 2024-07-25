// Older Way

// function getPersonsData() {
//    fetch('https://fakerapi.it/api/v1/persons')
//       .then((res) => {
//          res.json()
//             .then((fData) => {
//             console.log(fData)
//          })
//       })
// }

// Newer Way with async await


async function getPersonsData() {
   const res = await fetch('https://fakerapi.it/api/v1/persons')
   const finalData = await res.json()
   // console.log(finalData) // Data with response
   console.log(finalData.data) // Only Data
}

getPersonsData()