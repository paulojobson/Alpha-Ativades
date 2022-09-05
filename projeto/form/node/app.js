const express = require('express')
const http = require('http')
const cors = require('cors')
const app = express()
const server = http.Server(app)

const routes = require('./routes')

app.use(cors())
app.use(express.json())
app.use(routes)
server.listen(8000)