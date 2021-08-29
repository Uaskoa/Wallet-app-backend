const express = require('express');
const { categories: ctrl } = require('../../../controllers');
const categoriesRouter = express.Router();

categoriesRouter.get('/', ctrl.getAllCategories);

module.exports = categoriesRouter;

// const express = require('express');
// // const controller = require('../../../controllers/categories');
// const categoriesRouter = express.Router();
// const service = require('../../../services/categories');

// categoriesRouter.get('/', async (req, res, next) => {
//   try {
//     const result = await service.getAllCategories();
//     return res.json({
//       data: { result },
//     });
//   } catch (error) {
//     next(error);
//   }
// });

// module.exports = categoriesRouter;
