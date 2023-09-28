const { User } = require('../models');

const create = async (user) => User.create(user);

const getAll = async () => User.findAll({
  attributes: { exclude: ['password'] },
});

const getById = async (id) => User.findByPk(id);

module.exports = {
  create,
  getById,
  getAll,
};
