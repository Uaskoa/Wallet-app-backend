const express = require('express')
const { wallet: ctrl } = require('../../../controllers')
const { vaidateTransactions } = require('../../../services')

const walletRouter = express.Router()

walletRouter.get('/transactions', vaidateTransactions, ctrl.getAllTransactions)
walletRouter.post('/transactions', vaidateTransactions, ctrl.createTransactions)

module.exports = walletRouter
