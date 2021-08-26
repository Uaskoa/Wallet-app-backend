const service = require('../../services/categories')

const getAllCategories = async (req, res, next) => {
    try {
        const result = await service.getAllCategories()
        return res.json({
            data:{result}
        })
    } catch (error) {
        next(error)
    }
}
module.exports = getAllCategories