const router = require('express').Router();
const proxyRequest = require('./services/proxyRequest');
const jwt = require('express-jwt');
const config = require('./config');

const secret = config.jwtSecret;

router.use('/oauth', require('./auth/auth.routes'));
router.route('/*')
  .all(jwt({ secret }))
  .get(proxyRequest);

module.exports = router;
