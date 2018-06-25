'use strict'

const jwt = require('jsonwebtoken')
const sha256 = require('sha256')
const User = require('../models/user.model')

const createToken = (login) => {
    const token = jwt.sign({
        data: {
            name: login
        }
    }, 'secret', {
        expiresIn: 3600,
        algorithm: 'HS256'
    })
    return token
}

exports.login = (req, res, next) => {
    User.findOne({
        login: req.body.login
    }, (e, user) => {
        if (e) {
            next({
                code: 500,
                data: e
            })
        } else {
            if (user && (sha256(req.body.password) === user.password)) {
                const token = createToken(req.body.login)
                res.json({
                    token: token
                })
            } else {
                next({
                    code: 401,
                    data: new Error("authorization failed")
                })
            }
        }
    })
}