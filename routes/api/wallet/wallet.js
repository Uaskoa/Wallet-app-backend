const express = require('express')
const { wallet: ctrl } = require('../../../controllers')
const authenticate = require('../../../middlewares/authenticate')

const walletRouter = express.Router()

walletRouter.post('/transactions', authenticate, ctrl.createTransactions)
walletRouter.get('/transactions', authenticate, ctrl.getTransactionsByFilter)
walletRouter.get('/transactions/all', authenticate, ctrl.getAllTransactions)


module.exports = walletRouter
