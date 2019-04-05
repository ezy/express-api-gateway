module.exports = {
  port: process.env.PORT,
  jwtSecret: process.env.JWT_SECRET,
  bodyLimit: '100kb',
  corsHeaders: ['Link'],
};
