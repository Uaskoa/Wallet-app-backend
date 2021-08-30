const Joi = require('joi')

const validateUserSignUp = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
  name:Joi.string().min(2).required()
})


module.exports =  validateUserSignUp
