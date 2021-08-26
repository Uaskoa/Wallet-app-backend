const service = require('../../services/transaction')

const getAllTransactions = async (req, res, next) => {
    try {
        const userId = req.user._id
        const result = await service.getAll(userId)
        return res.json({
            data: { result }
        })
    } catch (error) {
       next(error)
    }
}

module.exports = getAllTransactions