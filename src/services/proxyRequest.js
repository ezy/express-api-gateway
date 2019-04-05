
const requestProxy = require("express-request-proxy");

module.exports = (req, res, next) => {
  var proxy = requestProxy({
    url: `https://jsonplaceholder.typicode.com${req.url}`,
  });
  proxy(req, res, next);
};