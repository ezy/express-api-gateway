const router = require('express').Router();
const jwt = require('express-jwt');
const each = require('lodash/each');
const requestProxy = require('express-request-proxy');

const config = require('./config');

const secret = config.jwtSecret;

const wildProxy = (req, res, next) => {
  const proxy = requestProxy({
    url: `${config.hostUrl}${req.url}`,
  });
  proxy(req, res, next);
};

router.use('/oauth', require('./auth/auth.routes'));

if (config.proxyAll) {
  router.route('/*')
    .all(jwt({ secret }))
    .get(wildProxy);
} else {
  each(config.routes, (route, k) => {
    each(route, (r) => {
      const host = r.host || config.hostUrl;
      // setup route from config file
      const routeConfig = [
        r.path,
        r.auth ? jwt({ secret }) : null,
        requestProxy({ url: `${host}${r.path}` }),
      ];
      // use http req type key to cycle and create routes dynamically
      router[k](...routeConfig.filter(e => e));
    });
  });
}

module.exports = router;
