const Wallet = require('../../models')

const getAllTransactions = async (req, res, next) => {
  try {
    const userId = req.userId._id
    const wallet = await Wallet.findOne({ createdBy: userId })
      .populate('transactions')
      .lean()

    return res.json({
      totalBalance: wallet.totalBalance,
      data: wallet.getAllTransactions,
    })
  } catch (error) {
    next(error)
  }
}
module.exports = getAllTransactions
