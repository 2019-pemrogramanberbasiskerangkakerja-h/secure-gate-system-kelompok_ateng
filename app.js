var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')
var hbs = require('express-handlebars')
var session = require('express-session')

app = express()
app.use(session({secret: "Kelompok Ateng"}))
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.set('views',path.join(__dirname,'views'))
app.set('view engine','hbs')

app.engine( 'hbs', hbs( {
    extname: 'hbs',
    defaultView: 'default',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/includes/'
  }));

var route = require('./routes/route.js')
app.use('/',route)


app.listen(3000)