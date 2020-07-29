const express = require('express')
const path = require('path')
const morgan = require('morgan')
const mongoose = require('mongoose')
const app = express()

//DB connections
mongoose.connect('mongodb://localhost/crud-mongo', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(db => console.log('DB connected'))
    .catch(err => console.log(err))


//import routes
const indexRoutes = require('./routes/index')

//settings
app.set('port', process.env.PORT || 4000)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))

//routes
app.use('/', indexRoutes)

//server start
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`)
})