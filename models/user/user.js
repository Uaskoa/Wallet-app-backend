const { Schema, model } = require('mongoose');
// const validator = require('validator')
const bcrypt = require('bcryptjs');

const userSchema = Schema({
  email: {
    type: String,
    unique: true,
    required: [true, 'Email is required'],
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  token: {
    type: String,
    default: null,
  },
});

userSchema.virtual('wallet', {
  ref: 'Wallet',
  localField: '_id',
  foreignField: 'createdBy',
  justOne: true,
});

userSchema.methods.setPassword = function (password) {
  this.password = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

userSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;
