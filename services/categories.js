const  Categories  = require('../models/categories/categories')

const getAllCategories = () => {
    const result = Categories.find()
    return result
}
module.exports = { getAllCategories }