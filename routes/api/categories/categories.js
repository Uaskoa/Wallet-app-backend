const express = require('express')
const controller = require('../../../controllers/categories/categories')
const categoriesRouter = express.Router()
const service = require('../../../services/categories')

categoriesRouter.get('/all', async (req, res, next) => {
  try {
    const result = await service.getAllCategories()
    return res.json({
      data: { result }
    })
  } catch (error) {
    next(error)
  }
})

module.exports = categoriesRouter
