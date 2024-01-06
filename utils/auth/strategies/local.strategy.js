const { Strategy } = require('passport-local');
const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const UserService = require('../../../services/user.service');

const service = new UserService();

const localStrategy = new Strategy(
  {
    usernameField: 'ficha',
  },
  async (ficha, password, done) => {
    try {
      const user = await service.findByFicha(ficha);

      if (!user) {
        return done(boom.unauthorized('Usuario/Password incorrecto'), false);
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return done(boom.unauthorized('Usuario/Password incorrecto'), false);
      }

      delete user._doc.password;
      return done(null, user);
    } catch (error) {
      return done(error);
    }
  }
);

module.exports = localStrategy;
