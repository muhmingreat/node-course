const request = require('request')
const forecast = require('./utilis/forecast')
// 
// const url =	
// 'http://api.weatherstack.com/current?access_key=30b9e31684161664e6bbbeb5e0b41253&query=37.8267,-122.4233&units=s'
// request({url:url,json:true},(error ,response) =>{
// if (error){
    // console.log('Unable to connect to weather service')
// } else if( response.body.error){
// console.log('Unable to find location')
// }else{
// 
    // console.log( response.body.current.weather_descriptions[0]+ ' it currently ' + response.body.current.temperature +
    // ' degress out . it feel like ' + response.body.current.feelslike + ' degress out')
// }


   
    // console.log(response.body.current)
// const data = JSON.parse(response.body)
// console.log(data.current)
//})
forecast(37.8267,-122.4233, (error,data) =>{
console.log('Error',error)
console.log('Data',data)
})