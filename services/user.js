const User = require('../models/user/user');

const getUserTa = filter => {
  User.find(filter);
};

const getOne = filter => {
  return User.findOne(filter);
};
const add = ({ email, password, name, token }) => {
  const newUser = new User({ email, name, token });
  newUser.setPassword(password);
  return newUser.save();
};
const updateById = (id, updateInfo) => {
  return User.findByIdAndUpdate(id, updateInfo, { new: true });
};

module.exports = { getOne, add, updateById, getUserTa };
