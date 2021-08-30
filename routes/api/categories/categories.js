const express = require('express');
const { categories: ctrl } = require('../../../controllers');
const categoriesRouter = express.Router();

categoriesRouter.get('/', ctrl.getAllCategories);

module.exports = categoriesRouter;


