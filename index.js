const express = require('express');
const winston = require('winston');
const expressWinston = require('express-winston');
const config = require('./src/config.js');
const routes = require('./src/router');

require('dotenv').config();

const app = express();

require('./src/middleware')(app);

app.use('/v2', routes);

app.use(expressWinston.errorLogger({
  transports: [
    new winston.transports.Console(),
  ],
  requestWhitelist: ['url', 'method', 'httpVersion', 'originalUrl', 'query'],
  format: winston.format.combine(
    winston.format.json(),
  ),
}));

app.listen(config.http.port, () => {
  console.log(`Server started | ENV=${process.env.NODE_ENV} | http://localhost:${config.http.port}`);
});
