const router = require('express').Router();
const jwt = require('express-jwt');
const each = require('lodash/each');
const proxyRequest = require('./services/proxyRequest');
const config = require('./config');

const secret = config.jwtSecret;

router.use('/oauth', require('./auth/auth.routes'));

if (config.proxyAll) {
  router.route('/*')
    .all(jwt({ secret }))
    .get(proxyRequest);
}

each(config.routes, (r, k) => {
  console.log(JSON.stringify(r), k);
  // const routeConfig = [
  //   s.path,
  //   s.auth || (s.auth === undefined && config.auth) ? auth : null,
  //   s.rewrite ? rewrite(s.path, s.rewrite) : null,
  //   proxy(s.url),
  // ];
  // router.all(...routeConfig.filter(e => e));
});


module.exports = router;
