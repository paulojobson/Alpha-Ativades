const express = require('express')
const routes = express.Router()
const { create, read, update, remove } = require('./controllers/userController')

routes.post('/users', create)
routes.get('/users/:email?', read)
routes.put('/users/:userEmail', update)
routes.delete('/users/:email', remove)

module.exports = routes