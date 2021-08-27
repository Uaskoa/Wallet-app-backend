const express = require('express')
const { wallet: ctrl } = require('../../../controllers')
const authenticate = require('../../../middlewares/authenticate')

// const walletRouter = express.Router()

// walletRouter.post('/', authenticate, ctrl.createTransactions)
// walletRouter.get('/', authenticate, ctrl.getTransactionsByFilter)
// walletRouter.get('/all', authenticate, ctrl.getAllTransactions)


// module.exports = walletRouter


const transactionsRouter = express.Router();

transactionsRouter.post('/', authenticate, ctrl.createTransactions);
transactionsRouter.get('/', authenticate, ctrl.getTransactionsByFilter);
transactionsRouter.get('/all', authenticate, ctrl.getAllTransactions);

module.exports = transactionsRouter;