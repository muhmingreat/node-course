const http = require('http')

const url =
'http://api.weatherstack.com/current?access_key=30b9e31684161664e6bbbeb5e0b41253&query=37.8267,-122.4233&units=s'
  const request = http.request( url,(response) =>{
   let data =''
   response.on('data',(chunk)=>{
data = data+= chunk.toString()
   }) 
   response.on('end',()=>{

const body = JSON.parse(data) 
    console.log(body)
   })
   request.on('error',(error) =>{
    console.log('An error', error)
   })
 })
 request.end()