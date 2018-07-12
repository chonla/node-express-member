'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MemberSchema = new Schema({
    name: String,
    imgUrl: String,
    instagramId: String,
})

module.exports = mongoose.model('Member', MemberSchema)