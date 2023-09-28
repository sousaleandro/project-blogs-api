const jwt = require('jsonwebtoken');

const { userService } = require('../services');

const secret = process.env.JWT_SECRET;

function extractToken(bearerToken) {
  return bearerToken.split(' ')[1];
}

module.exports = async (req, res, next) => {
  const bearerToken = req.header('Authorization');
  if (!bearerToken) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const token = extractToken(bearerToken);
  try {
    const decoded = jwt.verify(token, secret);
  
    const user = await userService.getById(decoded.data.userId);

    if (!user) {
      return res.status(401).json({ message: 'Erro ao procurar usuário do token.' });
    }

    next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};