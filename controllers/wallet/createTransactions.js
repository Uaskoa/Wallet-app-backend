const { object } = require('joi');
const { Transaction, Wallet, User } = require('../../models');
const service = require('../../services/transaction');
const TA = require('./../../models/transaction/transaction');
const { COST, INCOME } = Transaction.TYPES;
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
} = Transaction.CATEGORIES;

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
};

const createTransaction = async (req, res, next) => {
  const { date, type, category, comment, amount } = req.body;
  const year = date.substring(0, 4);
  const month = date.substring(5, 7);

  const userId = req.user._id;
  try {
    let balanceAfter;
    const amountNumber = +amount;

    const resultBalance = lastBalance => {
      return type === COST
        ? lastBalance - amountNumber
        : lastBalance + amountNumber;
    };

    const lastBalance = await TA.find({ createdBy: userId })
      .sort({ $natural: -1 })
      .limit(1);

    if (lastBalance[0] === undefined) {
      if (type === COST) {
        return res.json({
          messege: 'Баланс не может быть отрицательным',
        });
      }
      balanceAfter = resultBalance(0);
    } else {
      if (lastBalance[0].balanceAfter < amountNumber && type === COST) {
        return res.json({
          messege: 'Баланс не может быть отрицательным',
        });
      }
      balanceAfter = resultBalance(lastBalance[0].balanceAfter);
    }

    const result = await service.add({
      date,
      type,
      category,
      comment,
      amount,
      year,
      month,
      balanceAfter,
      createdBy: req.user._id,
      userId: req.user._id,
    });
    return res.json({
      data: { result },
    });

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
    next(error);
  }
};

module.exports = createTransaction;
