const jwt = require('jsonwebtoken');
const config = require('../config');

const authenticate = (req, res, next) => {
  const user = {
    userId: req.body.userId,
    password: req.body.password,
  };

  if (!user.userId || !user.password) {
    return res
      .status(422)
      .send({ error: 'Authentication failed. Wrong email or password.' });
  }

  delete user.password;
  const token = jwt.sign({ user }, config.jwtSecret);

  return res.json({
    user,
    token,
  });
};

module.exports = {
  authenticate,
};
