const route = require('express').Router();

const { loginController } = require('../controllers');
const validateLogin = require('../middlewares/validations/validateLogin');

route.post('/', validateLogin, loginController);

module.exports = route;