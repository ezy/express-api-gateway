const express = require('express');
const winston = require('winston');
const expressWinston = require('express-winston');
const https = require('https');
const fs = require('fs');
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

const logUrl = (protocol) => {
  console.log(`Server started | ENV=${config.env} | ${protocol}://localhost:${config[protocol].port}`);
};

if (config.protocol === 'http') {
  this.http = app.listen(config.http.port || 8081, config.http.host, logUrl('http'));
}
if (config.protocol === 'https') {
  const key = fs.readFileSync(config.https.key, 'utf8');
  const cert = fs.readFileSync(config.https.cert, 'utf8');
  const ca = config.https.ca ? fs.readFileSync(config.https.ca, 'utf8') : undefined;
  this.https = https.createServer({ key, cert, ca }, app)
    .listen(config.https.port || 8443, logUrl('https'));
}
