const { categoriesService } = require('../services');

const create = async (req, res) => {
  try {
    const { name } = req.body;
    const category = await categoriesService.create(name);
    return res.status(201).json(category);
  } catch (err) {
    return res.status(500).json({ message: 'Internal Error', error: err.message });
  }
};

module.exports = {
  create,
};