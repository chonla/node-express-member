'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    login: String,
    password: String,
    display: String,
    email: String
})

module.exports = mongoose.model('User', UserSchema)