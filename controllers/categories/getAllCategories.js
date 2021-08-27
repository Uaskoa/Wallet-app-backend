const service = require('../../services/categories');

const getAllCategories = async (req, res, next) => {
  try {
    const result = await service.getAll();
    return res.json({
      data: { result },
    });
  } catch (error) {
    next(error);
  }
};
module.exports = getAllCategories;
