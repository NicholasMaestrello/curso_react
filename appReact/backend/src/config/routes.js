const express = require('express')

module.exports = function (server) {
    //rotas
    const router = express.Router()
    server.use('/api', router)

    const todoServive = require('../api/todo/todoService')
    todoServive.register(router, '/todos')
}