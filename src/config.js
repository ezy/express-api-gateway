module.exports = {
  proxyUrl: 'https://jsonplaceholder.typicode.com',
  proxyAll: true,
  auth: true,
  apiKey: '123456',
  jwtSecret: process.env.JWT_SECRET,
  http: {
    port: process.env.PORT,
  },
  https: {
    cert: 'certificate.pem',
    key: 'privateKey.pem',
    ca: 'authority.pem',
    port: process.env.PORT,
  },
  routes: {
    get: [{
      url: 'https://httpbin.org',
      path: '/status/200',
      auth: false,
    }, {
      path: '/users',
    }, {
      path: '/posts',
    }],
    post: [{
      path: '/posts',
    }],
    put: [{
      path: '/posts/1',
    }],
    delete: [{
      path: '/posts/1',
    }],
  },
};
