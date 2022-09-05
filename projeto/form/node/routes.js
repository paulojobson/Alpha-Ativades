const express = require('express')
const routes = express.Router()
const { create, read, update, remove } = require('./controllers/userController')

routes.post('/users', create)
routes.get('/users/:id?', read)
routes.put('/users/:id', update)
routes.delete('/users/:id', remove)

module.exports = routes
