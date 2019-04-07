const OAuth2Server = require('oauth2-server');

const Request = OAuth2Server.Request;
const Response = OAuth2Server.Response;

const model = require('./model');

const oauth = new OAuth2Server({
  model,
});

const request = new Request({
  method: 'GET',
  query: {},
  headers: {
    Authorization: 'Bearer foobar',
  },
});

const response = new Response({
  headers: {},
});
