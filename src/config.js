module.exports = {
  http: {
    port: process.env.PORT,
  },
  https: {
    cert: 'cert.pem',
    key: 'privkey.pem',
    ca: 'chain.pem',
    port: 8443,
  },
  auth: true,
  jwtSecret: process.env.JWT_SECRET,
  apiKey: '123456',
  services: {
    ip: {
      path: '/ip',
      url: 'https://httpbin.org',
      auth: false,
    },
    quote: {
      path: '/jokes/*',
      rewrite: '/jokes/random',
    },
  },
  proxyUrl: 'https://jsonplaceholder.typicode.com',
};
