function getAnimalDAta() {
   let data = fetch('https://fakerapi.it/api/v1/persons')
   console.log(data)
   let res = data.then((res) => {
      return res.json()
   })
   console.log(res)
   let finalData = res.then((fData) => {
      console.log(fData)
   })
   // console.log(finalData)
}

// getAnimalDAta()


function getPersonsData() {
   fetch('https://fakerapi.it/api/v1/persons')
      .then((res) => {
         res.json()
            .then((fData) => {
            console.log(fData)
         })
      })
}

// getPersonsData()


// Third Way with