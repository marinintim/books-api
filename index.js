const express = require('express')

const app = express()

const api = require('./api')
const admin = require('./admin')

app.use('/admin', admin)
app.use(api)

app.listen(process.env.PORT || 3000);

