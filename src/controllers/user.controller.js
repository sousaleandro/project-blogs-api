const jwt = require('jsonwebtoken');
const validateUser = require('../middlewares/validations/validateUser');
const { userService } = require('../services');

const secret = process.env.JWT_SECRET;
const jwtConfig = {
  algorithm: 'HS256',
};

const create = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;

    const error = validateUser({ displayName, email, password, image });
    if (error) {
      return res.status(400).json({ message: error });
    }

    const user = await userService.create({ displayName, email, password, image });

    const token = jwt.sign({ data: { userId: user.id } }, secret, jwtConfig);

    return res.status(201).json({ token });
  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      return res.status(409).json({ message: 'User already registered' });
    }
    return res.status(500).json({ message: 'Internal Error', error: err.message });
  }
};

const getAll = async (_req, res) => {
  try {
    const users = await userService.getAll();
    return res.status(200).json(users);
  } catch (err) {
    return res.status(500).json({ message: 'Internal Error', error: err.message });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userService.getById(id);
    if (!user) {
      return res.status(404).json({ message: 'User does not exist' });
    }
    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json({ message: 'Internal Error', error: err.message });
  }
};

module.exports = {
  create,
  getById,
  getAll,
};