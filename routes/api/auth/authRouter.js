const express = require('express');
const authRouter = express.Router();
const { auth: ctrl } = require('../../../controllers');
const authenticate = require('../../../middlewares/authenticate');

authRouter.post('/signup', ctrl.signUp);
authRouter.post('/login', ctrl.login);
authRouter.post('/logout', authenticate, ctrl.logout);
authRouter.get('/current', authenticate, ctrl.getProfile);

module.exports = authRouter;
