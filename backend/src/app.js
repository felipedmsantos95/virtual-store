//To import and use middlewares and modules

const express = require('express')
const routes = require('./routes')
const morgan = require('morgan')
const cors = require('cors')
const { errors } = require('celebrate')


const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(routes)
app.use(errors())

module.exports = app
