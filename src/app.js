// Modules
const express = require('express')
const handlebars = require('express-handlebars')
const path = require('path')

const app = express()

// Template engine
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// Assets
app.use(express.static(path.join(__dirname, 'assets')))

// Routes
app.get('/', (req, res) => {
    res.render('content/void')
})

app.get('/about', (req, res) => {
    res.render('content/about')
})

// Server
app.listen('8081', () => {
    console.log('rum')
})