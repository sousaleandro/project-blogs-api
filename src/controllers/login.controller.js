const jwt = require('jsonwebtoken');
const { loginService } = require('../services');

const secret = process.env.JWT_SECRET;

module.exports = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await loginService.getByEmail(email);
    if (!user || user.password !== password) {
      return res.status(400).json({ message: 'Invalid fields' });
    }

    const jwtConfig = {
      algorithm: 'HS256',
    };

    const token = jwt.sign({ data: { userId: user.id } }, secret, jwtConfig);

    res.status(200).json({ token });
  } catch (err) {
    return res.status(500).json({ message: 'Internal Error', error: err.message });
  }
};
