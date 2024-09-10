const fs = require('fs')
const { callbackify } = require('util')

fs.readFile('file.txt', 'utf8', (err, data)=>{
    console.log(err, data)
})
console.log("finished reading file")