'use strict'

var express = require('express')
var app = express()

app.use(express.json()) // Para poder leer datos en formato JSON en POST

app.set("port", process.env.PORT || 4000)

// ====== GET existentes ======
app.get('/', function (req, res) {
  console.log('GET request received')
  res.writeHead(200, {'Content-Type': 'application/json'})
  var response = { "response" : "This is GET method." }
  console.log(response)
  res.end(JSON.stringify(response))
})

app.get('/:id', function (req, res) {
  console.log('GET /:id request received')
  res.writeHead(200, {'Content-Type': 'application/json'})
  var response = { "response" : "This is GET method with id=" + req.params.id + "." }
  console.log(response)
  res.end(JSON.stringify(response))
})

// ====== NUEVO GET ======
app.get('/status/health', function (req, res) {
  console.log('GET /status/health request received')
  res.writeHead(200, {'Content-Type': 'application/json'})
  var response = { "status" : "OK", "message": "The API is healthy and running." }
  console.log(response)
  res.end(JSON.stringify(response))
})

// ====== POST existentes ======
app.post('/', function (req, res) {
  console.log('POST request received')
  res.writeHead(200, {'Content-Type': 'application/json'})
  var response = { "response" : "This is POST method." }
  console.log(response)
  res.end(JSON.stringify(response))
})

// ====== NUEVO POST ======
app.post('/echo', function (req, res) {
  console.log('POST /echo request received')
  res.writeHead(200, {'Content-Type': 'application/json'})
  var response = { "you_sent" : req.body }
  console.log(response)
  res.end(JSON.stringify(response))
})

// ====== PUT ======
app.put('/', function (req, res) {
  console.log('PUT request received')
  res.writeHead(200, {'Content-Type': 'application/json'})
  var response = { "response" : "This is PUT method." }
  console.log(response)
  res.end(JSON.stringify(response))
})

// ====== DELETE ======
app.
