const express = require('express')
const { wallet: ctrl } = require('../../../controllers')
// const { vaidateTransactions } = require('../../../services')

const walletRouter = express.Router()

walletRouter.get('/transactions', ctrl.getAllTransactions)
walletRouter.post('/transactions', ctrl.createTransactions)

module.exports = walletRouter
