
const fs = require('fs') 

//  const dataBuffer = fs.readFileSync('json.json')
// const dataJSON =dataBuffer.toString()
// const data = JSON.parse(dataJSON) 
// console.log(data.title)
// console.log(data.autor,data.title)

const dataBuffer = fs.readFileSync('json.json')
const dataJSON  = dataBuffer.toString()
const data  = JSON.parse(dataJSON)
 data.name  = 'Muhmin'
 data.age = 43

 const userJSON = JSON.stringify(data)
 fs.writeFileSync('json.json',userJSON)



// const book ={
//  title:'ogboju ode',
//  autor:'D O Fagunwa'
// }
// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('json.json',bookJSON)

// const bookJSON = JSON.stringify(book)
// console.log(bookJSON)
// const parseData = JSON.parse(bookJSON)
// console.log(parseData.title)
