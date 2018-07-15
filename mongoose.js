'use strict'

const mongoose = require('mongoose')

module.exports = () => {
    mongoose.Promise = global.Promise
    mongoose.connect('mongodb://mongodb:27017/data')
        .then(() => {
            console.log('database connection is established.')
        }).catch(err => {
            console.log('failed to establish database connection. exit.')
            process.exit(1)
        })
    process.on('SIGINT', () => {
        mongoose.connection.close(() => {
            console.log('database connection is disconnected on SIGINT.')
            process.exit(0)
        })
    })
}