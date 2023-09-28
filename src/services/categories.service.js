const { Category } = require('../models');

const create = async (name) => Category.create({ name });

const getAll = async () => Category.findAll();

const getById = async (id) => Category.findByPk(id);

module.exports = {
  create,
  getAll,
  getById,
};