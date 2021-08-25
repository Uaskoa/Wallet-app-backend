
const User = require('../models/user/user')

const getOne = (filter) => {
  return User.findOne(filter)
}
const add = ({ email, password, name, verifyToken }) => {
  const newUser = new User({ email, name, verifyToken })
  newUser.setPassword(password)
  return newUser.save()
}
const updateById = (id, updateInfo) => {
  return User.findByIdAndUpdate(id, updateInfo, { new: true })
}

module.exports = { getOne, add, updateById }