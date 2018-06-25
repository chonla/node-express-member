'use strict'

const express = require('express')
const cors = require('cors')
const AuthService = require('./services/auth.service')
const UserService = require('./services/user.service')
const security = require('./middlewares/security.middleware')

module.exports = (app) => {
    const router = express.Router()

    router.options('*', cors())
    router.post('/auth/login', AuthService.login)
    router.post('/users', UserService.createUser)
    router.patch('/users/:id', security.secure, UserService.updateUser)

    app.use(router)
    app.use((err, req, res, next) => {
        console.log(err)
        res.status(err.code)
        res.send(err.data.message)
    })
}