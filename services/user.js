
const User = require('../models')

const getOne = (filter) => {
  return User.findOne(filter)
}
const add = ({ email, password, verifyToken }) => {
  const newUser = new User({ email, verifyToken })
  newUser.setPassword(password)
  return newUser.save()
}
const updateById = (id, updateInfo) => {
  return User.findByIdAndUpdate(id, updateInfo, { new: true })
}

module.exports = { getOne, add, updateById }
