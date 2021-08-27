const passport = require('passport');
const { ExtractJwt, Strategy } = require('passport-jwt');
require('dotenv').config();
const service = require('../services/user');

const { SECRET_KEY } = process.env;

const settings = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: SECRET_KEY,
};

const jwtStrategy = new Strategy(settings, async (payload, done) => {
  try {
    const user = await service.updateById(payload.id);
    if (!user) {
      throw new Error('Not Found');
    }

    done(null, user);
  } catch (error) {
    done(error);
  }
});

passport.use('jwt', jwtStrategy);
