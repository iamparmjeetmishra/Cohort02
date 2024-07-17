const fs = require('fs')

fs.readFile('a1.txt', 'utf-8', function (err, data) {
   data = data + 'John was here'
   fs.writeFile()
}) 