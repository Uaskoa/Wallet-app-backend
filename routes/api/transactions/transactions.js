const express = require('express');
const { transactions: ctrl } = require('../../../controllers');
const authenticate = require('../../../middlewares/authenticate');

const transactionsRouter = express.Router();

transactionsRouter.post('/', authenticate, ctrl.createTransactions);
transactionsRouter.get('/', authenticate, ctrl.getTransactionsByFilter);
transactionsRouter.get('/all', authenticate, ctrl.getAllTransactions);

module.exports = transactionsRouter;
