'use strict'

const express = require('express')
const cors = require('cors')
const AuthService = require('./services/auth.service')
const UserService = require('./services/user.service')
const MemberService = require('./services/member.service')
const security = require('./middlewares/security.middleware')

module.exports = (app) => {
    const router = express.Router()

    router.options('*', cors())
    router.post('/auth/login', cors(), AuthService.login)
    router.post('/users', cors(), UserService.createUser)
    router.patch('/users/:id', [cors(), security.secure], UserService.updateUser)
    router.patch('/me', [cors(), security.secure], UserService.updateMe)
    router.get('/me', [cors(), security.secure], UserService.getMe)

    router.get('/bnk/members', cors(), MemberService.getMember)
    router.post('/bnk/members', [cors(), security.secure], MemberService.createMember)
    router.patch('/bnk/members/:id', [cors(), security.secure], MemberService.updateMember)
    router.delete('/bnk/members/:id', [cors(), security.secure], MemberService.deleteMember)

    app.use(router)
    app.use((err, req, res, next) => {
        console.log(err)
        res.status(err.code)
        res.send(err.data.message)
    })
}