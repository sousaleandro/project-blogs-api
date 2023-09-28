const route = require('express').Router();

const validateToken = require('../auth/validateToken');
const { userController } = require('../controllers');

route.post('/', userController.create);

route.use('/', validateToken);

route.get('/', userController.getAll);

route.get('/:id', userController.getById);

module.exports = route;