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

exports.updateMe = (req, res, next) => {
    User.findOne({
        _id: req.user.data.id
    }, (e, user) => {
        if (e) {
            next({
                code: 500,
                data: e
            })
        } else {
            if (user) {
                User.findOneAndUpdate({
                        _id: req.user.data.id
                    },
                    req.body, (e) => {
                        if (e) {
                            next({
                                code: 500,
                                data: e
                            })
                        } else {
                            res.json({
                                message: "user profile has been updated."
                            })
                        }
                    })
            } else {
                next({
                    code: 404,
                    data: new Error('user is not found.')
                })
            }
        }
    })
}

exports.updateUser = (req, res, next) => {
    User.findOne({
        _id: req.params.id
    }, (e, user) => {
        if (e) {
            next({
                code: 500,
                data: e
            })
        } else {
            if (user) {
                User.findOneAndUpdate({
                        _id: req.params.id
                    },
                    req.body, (e) => {
                        if (e) {
                            next({
                                code: 500,
                                data: e
                            })
                        } else {
                            res.json({
                                message: "user profile has been updated."
                            })
                        }
                    })
            } else {
                next({
                    code: 404,
                    data: new Error('user is not found.')
                })
            }
        }
    })
}