const request  = require('request')

const forecast = (longitude ,latitude, callback) =>{
const url =
'http://api.weatherstack.com/current?access_key=30b9e31684161664e6bbbeb5e0b41253&query='+ longitude +','+ latitude +'&units=m'
request({url: url,json: true },(error,response)=>{
if (error){
callback('Unable to connect' ,undefined)
}else if(response.body.error){
callback('Unabel to locate',undefined)
}else{
callback(undefined,response.body.current.weather_descriptions[0]+ ' it currently ' + response.body.current.temperature +
' degress out . it feel like ' + response.body.current.feelslike + ' degress out')
}
})
}
module.exports = forecast