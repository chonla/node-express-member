'use strict'

const app = require('express')()

require('./middlewares')(app)
require('./routes')(app)
require('./mongoose')()

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})