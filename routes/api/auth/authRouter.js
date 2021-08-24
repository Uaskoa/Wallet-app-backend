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
authRouter.post('/sign-up', validate(validateUser), express.json(), ctrl.singUp)
authRouter.get('/logout', authenticate, ctrl.logout)
authRouter.get('/current', authenticate, ctrl.getProfile)
authRouter.get('/verify/:verifyToken', ctrl.verify)

module.exports = authRouter
