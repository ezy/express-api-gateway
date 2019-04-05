
const requestProxy = require("express-request-proxy");
const config = require('../config')

module.exports = (req, res, next) => {
  var proxy = requestProxy({
    url: `${config.proxyUrl}${req.url}`,
  });
  proxy(req, res, next);
};