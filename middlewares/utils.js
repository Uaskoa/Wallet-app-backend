const Joi = require('joi')



const validateUser = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required()
})
// const validateUser = newUser => {
//   const schema = Joi.object({
//     email: Joi.string().required(),
//     password: Joi.string().required(),
//   })
//   const { error } = schema.validate(newUser)
//   return error
// }
/* const validateUserByEmail = user => {
  const schema = Joi.object({ email: Joi.string().required() })
  const { error } = schema.validate(user)
  return error
} */

module.exports = { validateUser }
