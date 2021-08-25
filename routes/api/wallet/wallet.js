const express = require('express')
const { wallet: ctrl } = require('../../../controllers')
const authenticate = require('../../../middlewares/authenticate')
// const { vaidateTransactions } = require('../../../services')

const walletRouter = express.Router()

walletRouter.get('/transactions', authenticate, ctrl.getAllTransactions)
walletRouter.post('/transactions', authenticate, ctrl.createTransactions)

module.exports = walletRouter
