const express = require('express')
const authRouter = express.Router()
const { auth: ctrl } = require('../../../controllers')
const authenticate = require('../../../middlewares/authenticate')
const {
  // authenticate,
  validate,
  validateUser
} = require('../../../middlewares')
// const { vaidateAuth } = require('../../../services')


// validate(validateUser),
authRouter.post('/signup', ctrl.signUp)
authRouter.post('/login', ctrl.login)
authRouter.get('/logout',  ctrl.logout)
authRouter.get('/current', authenticate, ctrl.getProfile)
authRouter.get('/verify/:verifyToken', ctrl.verify)

module.exports = authRouter
