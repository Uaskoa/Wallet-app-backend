const Wallet = require('../../models')
const service = require('./../../services/transaction')
const getAllTransactions = async (req, res, next) => {
  try {
    const userId = req.user._id
    const {month, year}  = req.body
    
    // const result = await service.getAll(userId)


    const result= await service.getByFilter(userId,month,year)
    console.log(result);
    // console.log(userId);



    // const wallet = await Wallet.findOne({ createdBy: userId })
    //   .populate('transactions')
    //   .lean()

    // return res.json({
    //   totalBalance: wallet.totalBalance,
    //   data: wallet.getAllTransactions,
    // })
  } catch (error) {
    next(error)
  }
}
module.exports = getAllTransactions
