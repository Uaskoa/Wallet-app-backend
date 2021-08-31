const { Transaction } = require('../../models');
const service = require('../../services/transaction');
const serviceUser = require('../../services/user')
const TA = require('../../models/transaction/transaction');
const { COST } = Transaction.TYPES;

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
          message: 'Баланс не может быть отрицательным',
        });
      }
      balanceAfter = resultBalance(0);
    } else {
      if (lastBalance[0].balanceAfter < amountNumber && type === COST) {
        return res.json({
          message: 'Баланс не может быть отрицательным',
        });
      }
      balanceAfter = resultBalance(lastBalance[0].balanceAfter);
    }
    await serviceUser.updateById(userId,{balance:balanceAfter})
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
  } catch (error) {
    next(error);
  }
};

module.exports = createTransaction;
