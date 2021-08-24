const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const morgan = require('morgan')
const swaggerDoc = require('./swaggerJSDoc')

require('dotenv').config()
require('./configs/passport-config')
const { DB_HOST, PORT = 3001 } = process.env

const {
  authRouter,
  walletRouter,
} = require('./routes/api')

const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
swaggerDoc(app)

app.use(express.static('public'))
app.use('/api/transactions', walletRouter)
app.use('/api/auth', authRouter)

app.use((req, res) => {
  res.status(404).json({
    status: 'error',
    code: 404,
    message: 'Not found',
  })
})

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message })
})

mongoose
  .connect(DB_HOST, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(async () => {
    app.listen(PORT)
    console.log('Database connection successful')
  })
  .catch((error) => console.log(error))

module.exports = app
