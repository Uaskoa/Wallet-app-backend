const Categories = require('../models/categories');

const getAll = () => {
  return Categories.find();
};

module.exports = { getAll };
