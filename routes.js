'use strict'

const express = require('express')
const AuthService = require('./services/auth.service')
const UserService = require('./services/user.service')

module.exports = (app) => {
    const router = express.Router()

    router.post('/auth/login', AuthService.login)
    router.post('/users', UserService.createUser)

    app.use(router)
    app.use((err, req, res, next) => {
        console.log(err)
        res.status(err.code)
        res.send(err.data.message)
    })
}