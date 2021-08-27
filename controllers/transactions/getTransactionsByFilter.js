const service = require('../../services/transaction');

const getTransactionsByFilter = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const { month, year } = req.body;
    const result = await service.getByFilter(userId, month, year);
    console.log(result);
    return res.json({
      data: { result },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getTransactionsByFilter;
