const route = require('express').Router();

const validateToken = require('../auth/validateToken');
const { categoriesController } = require('../controllers');
const validateCategory = require('../middlewares/validations/validateCategory');

route.use('/', validateToken);

route.post('/', validateCategory, categoriesController.create);

route.get('/', categoriesController.getAll);

module.exports = route;