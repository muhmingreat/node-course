const express = require('express')
const path = require('path')
const hbs = require('hbs')

const app = express()

const viewPath = path.join(__dirname, '../templates/views')
const publicDirPath = path.join(__dirname ,'../public')
const partialsPath = path.join(__dirname,'../templates/partials')

app.set('views',viewPath)
app.set('view engine','hbs')
app.use(express.static(publicDirPath)) 
hbs.registerPartials(partialsPath)

app.get('',(req, res) => {
    res.render('index',{
     title: 'Weather',
     name:'Ayoolu Muhmin'   
    })
})

    app.get('/about',(req, res) => {
res.render('about',{
    title:"It's all about Me",
    name:'Abdul Muhmin Soliu'
})
    })


    app.get('/help',(req,res) => {
res.render('help',
{
 title:'The Muslim Ummoh',
  discription:'The Best'  
})
    })
//     app.get('/weather',(req,res) => {
//  res.send('Weather forecast')

// })


app.listen(3000,()=> {
    console.log('Server is up on port 3000')
})