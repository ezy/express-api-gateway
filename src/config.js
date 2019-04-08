module.exports = {
  env: process.env.NODE_ENV,
  hostUrl: 'https://jsonplaceholder.typicode.com',
  proxyAll: false,
  authKey: true,
  apiKey: '123456',
  jwtSecret: process.env.JWT_SECRET,
  protocol: 'http',
  http: {
    port: process.env.PORT,
  },
  https: {
    port: process.env.PORT,
    cert: 'certificate.pem',
    key: 'privateKey.pem',
    ca: 'authority.pem',
  },
  routes: {
    get: [{
      host: 'https://httpbin.org',
      path: '/status/200',
    }, {
      path: '/users',
      auth: true,
    }, {
      path: '/posts',
    }],
    post: [{
      path: '/posts',
      auth: true,
    }],
    put: [{
      path: '/posts/1',
      auth: true,
    }],
    delete: [{
      path: '/posts/1',
      auth: true,
    }],
  },
};
