const express = require('express')
const { auth: ctrl } = require('../../../controllers')
const {
  authenticate,
  validate,
  validateUser,
  validateUserByEmail
} = require('../../../middlewares')
const { vaidateAuth } = require('../../../services')

const authRouter = express.Router()

authRouter.post('/login', vaidateAuth, validate(validateUser), express.json(), ctrl.login)
authRouter.post('/sign-up', vaidateAuth, validate(validateUser), express.json(), ctrl.singUp)
authRouter.get('/logout', authenticate, ctrl.logout)
authRouter.get('/current', authenticate, ctrl.getProfile)
authRouter.get('/verify/:verifyToken', ctrl.verify)
authRouter.post('/verify', validate(validateUserByEmail), ctrl.verifyEmail)

module.exports = authRouter
