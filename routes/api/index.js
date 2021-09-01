const authRouter = require('./auth/index');
const transactionsRouter = require('./transactions');
const categoriesRouter = require('./categories');

module.exports = { authRouter, transactionsRouter, categoriesRouter };
