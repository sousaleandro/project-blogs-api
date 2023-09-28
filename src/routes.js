const express = require('express');
const { loginRouter, userRouter } = require('./router');

const routes = express();

routes.use('/login', loginRouter);
routes.use('/user', userRouter);
// routes.use('/categories', categoriesRouter);
// routes.use('/post', postRouter);

module.exports = routes;