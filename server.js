var express = require('express')        // call express
var app = express()                 // define our app using express
var bodyParser = require('body-parser')

app.use(express.static(__dirname + '/public'))

app.set('view engine', 'pug')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var port = process.env.PORT || 8080

var router = express.Router()

router.get('/forms', function(req, res, next) {
  return res.render('index', {
    title: 'Form tests'
  })
})

router.get('/', function(req, res, next) {
  console.log('get request', req.query)
  var data = req.query
  return res.json({ message: 'hooray! welcome to our api!', requested: data })   
})
router.post('/', function(req, res, next) {
  console.log('post request', req.body)
  var data = req.body 
  return res.json({ message: 'hooray! welcome to our api!', requested: data })   
})

app.use(router)

app.listen(port)
console.log('Magic happens on port ' + port)