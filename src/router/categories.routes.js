const route = require('express').Router();

const validateToken = require('../auth/validateToken');
const { categoriesController } = require('../controllers');
const validateCategory = require('../middlewares/validations/validateCategory');

route.use('/', validateToken);

route.post('/', validateCategory, categoriesController.create);

module.exports = route;