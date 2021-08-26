const { Transaction, Wallet, User } = require('../../models')
const service = require('../../services/transaction')

const { COST, INCOME } = Transaction.TYPES
const {
  MAIN_EXPENSES,
  FOOD,
  CAR,
  ENTERTAINMENT,
  SELF_CARE,
  CHILD_CARE,
  HOMEWARE,
  EDUCATION,
  RECREATION,
  OTHER_EXPENSES,
} = Transaction.CATEGORIES

const ALLOWED_CATEGORIES = {
  [COST]: [
    MAIN_EXPENSES,
    FOOD,
    CAR,
    ENTERTAINMENT,
    SELF_CARE,
    CHILD_CARE,
    HOMEWARE,
    EDUCATION,
    RECREATION,
    OTHER_EXPENSES,
  ],
}
const createTransaction = async (req, res, next) => {
  const { date, type, category, comments, amount,year,month } = req.body

    // const transaction = req.body;
    //   const createdTransaction = await Transaction.createOne({
    //     ...transaction,
    //     userId: req.user._id,
    //   });

  // const userId = req.user._id
  // const balance = COST ? 
  try {
    // const amountNumber = +amount
    // const user = await User.findById(userId)
      // .populate('wallet')
      // .lean()
    const createTransaction = await service.add({date, type, category, comments, amount,year,month,userId: req.user._id,})
    
    
    // const wallet = await Wallet.findById(user.wallet._id)
    // console.log(wallet);
  //   if (!ALLOWED_CATEGORIES[type].includes(category)) {
  //     return res.status(412).json({
  //       status: 'error',
  //       code: 412,
  //       message: 'Access to the target resource was denied'
  //     })
  //   }
  //   if (type === COST && amountNumber > wallet.total) {
  //     return res.status(412).json({
  //       status: 'error',
  //       code: 412,
  //       message: 'Insufficient funds for this operation'
  //     })
  //   }
    // const balanceAfter = type === COST
    //   ? +wallet.total - amountNumber
    //   : +wallet.total + amountNumber

    // const transformType = type === COST ? '-' : '+'
    // const transaction = new Transaction({
    //   date,
    //   type: transformType,
    //   category,
    //   comments,
    //   amount: amountNumber,
    //   balanceAfter,
    // })
    // wallet.total = balanceAfter
    // if (type === COST) {
    //   wallet.costs += amountNumber;
    // }
    // if (type === INCOME) {
    //   wallet.income += amountNumber;
    // }
    // const savedTransaction = await transaction.save();
    // wallet.transactions = [...wallet.transactions, savedTransaction._id];
    // await wallet.save();
    // res.json(savedTransaction);
  } catch (error) {
    next(error)
  }
}

module.exports = createTransaction
