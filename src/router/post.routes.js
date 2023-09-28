const route = require('express').Router();

const validateToken = require('../auth/validateToken');
const { postController } = require('../controllers');
const validatePost = require('../middlewares/validations/validatePost');

route.use('/', validateToken);

route.post('/', validatePost, postController.create);

module.exports = route;