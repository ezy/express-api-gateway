const config = require('../config');

module.exports = (req, res, next) => {
  const apiKey = req.headers.authorization;
  if (apiKey && apiKey === config.apiKey) {
    return next();
  }
  const error = 'Unauthorized';
  res.status(401, error);
  next(error);
};
