const express = require('express')
const { auth: ctrl } = require('../../../controllers')
const {
  authenticate,
  validate,
  validateUser,
} = require('../../../middlewares')
// const { vaidateAuth } = require('../../../services')

const authRouter = express.Router()

authRouter.post('/login', validate(validateUser), express.json(), ctrl.login)
authRouter.post('/signUp', validate(validateUser), express.json(), ctrl.signUp)
authRouter.get('/logout', authenticate, ctrl.logout)
authRouter.get('/current', authenticate, ctrl.getProfile)
authRouter.get('/verify/:verifyToken', ctrl.verify)

module.exports = authRouter
