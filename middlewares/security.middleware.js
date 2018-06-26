'use strict'

const jwt = require('jsonwebtoken')

exports.secure = (req, res, next) => {
    const authorization = req.headers.authorization
    if (authorization) {
        const auth_token = authorization.split(' ')
        if (auth_token[0] === 'Bearer' && auth_token.length > 1) {
            jwt.verify(auth_token[1], 'secret', (err, decodedToken) => {
                if (err) {
                    next(err)
                } else {
                    req.user = decodedToken
                    console.log(decodedToken)
                    next()
                }
            })
        } else {
            next({
                code: 401,
                data: new Error('You are not allowed.')
            })
        }
    } else {
        next({
            code: 401,
            data: new Error('You are not allowed.')
        })
    }
}