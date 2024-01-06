const express = require('express');
const authRouter = require('./auth.router');
const usersRouter = require('./users.router');



function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/auth',authRouter );
  router.use('/users', usersRouter);
  router.use('/uploads', express.static('uploads'));

}

module.exports = routerApi;
