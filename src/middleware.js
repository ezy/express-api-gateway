const bodyParser = require('body-parser');
const compression = require('compression');
const helmet = require('helmet');
const cors = require('cors');
const winston = require('winston');
const expressWinston = require('express-winston');

module.exports = (app) => {
  app.use(compression());
  app.use(bodyParser.urlencoded({
    extended: true,
  }));
  app.use(bodyParser.json());
  app.use(helmet());
  app.use(cors());
  app.use(expressWinston.logger({
    transports: [
      new winston.transports.Console(),
    ],
    requestWhitelist: ['url', 'method', 'httpVersion', 'originalUrl', 'query'],
    format: winston.format.combine(
      winston.format.json(),
    ),
  }));
};
