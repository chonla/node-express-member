'use strict'

const sha256 = require('sha256')
const User = require('../models/user.model')

exports.createUser = (req, res, next) => {
    const u = {
        login: req.body.login,
        display: req.body.display,
        email: req.body.email,
        password: sha256(req.body.password)
    }
    User.findOne({
        login: u.login
    }, (e, user) => {
        if (e) {
            next({
                code: 500,
                data: e
            })
        } else {
            if (user) {
                next({
                    code: 409,
                    data: new Error("login has been already taken.")
                })
            } else {
                User.create(u, (e, user) => {
                    if (e) {
                        next({
                            code: 500,
                            data: e
                        })
                    } else {
                        res.status(201)
                        res.json({
                            message: "user has been created."
                        })
                    }
                })
            }
        }
    })

}