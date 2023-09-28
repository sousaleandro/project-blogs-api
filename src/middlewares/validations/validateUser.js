const { userSchema } = require('./schemas');

const validateUser = (user) => {
  const { displayName, email, password, image } = user;
  
  const { error } = userSchema.validate({ displayName, email, password, image });
  if (error) {
    return error.message;
  }
};

module.exports = validateUser;