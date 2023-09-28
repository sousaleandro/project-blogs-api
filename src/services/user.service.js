const { User } = require('../models');

const create = async (user) => User.create(user);

const getById = async (id) => User.findByPk(id);

module.exports = {
  create,
  getById,
};
