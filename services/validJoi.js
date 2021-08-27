//  const Joi = require('joi');
// const { isMongoId } = require('validator');
// const Transaction = require('../models')

// const objectId = joi => ({
//   base: joi.string(),
//   name: 'string',
//   rules: [
//     {
//       name: 'objectId',
//       validate(_, value, state, options) {
//         if (!isMongoId(value)) {
//           return this.createError('string.objectId', { value }, state, options);
//         }
//         return value;
//       }
//     }
//   ]
// })
// const joi = Joi.extend(objectId)

// const validateAuth = {
//   '/auth/login': {
//     POST: joi.objectId({
//       email: joi.string()
//         .email()
//         .required(),
//       password: joi.string().required()
//     })
//   },
//   '/auth/sign-up': {
//     POST: joi.objectId({
//       email: joi.string()
//         .email()
//         .required(),
//       password: joi.string().required(),
//       name: joi.string()
//     })
//   }
// }

// const validateTransactions = {
//   '/wallet': {
//     POST: joi.objectId({
//       id: joi.string().required(),
//       data: joi.string().required(),
//       type: joi.string()
//         .validate(Object.values(Transaction.TYPES)).required(),
//       category: joi.string()
//         .validate(Object.values(Transaction.CATEGORIES)).required(),
//       amount: joi.number().required(),
//       comments: joi.string()
//     })
//   }

// }

// module.exports = { validateAuth, validateTransactions } 
