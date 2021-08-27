// const authRouter = require('./auth/index')
// const walletRouter = require('./wallet')
// // const categoriesRouter = require('./categories/categories')

// module.exports = { authRouter, walletRouter }


const authRouter = require('./auth/index');
const transactionsRouter = require('./wallet');
// const categoriesRouter = require('./categories/categories')

module.exports = { authRouter, transactionsRouter };
