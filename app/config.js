var config = {};

config.env = process.env.NODE_ENV || 'development';

config.server = {
  host: process.env.SERVER_HOST,
  port: process.env.SERVER_PORT || 8001,
  options: {}
};

config.cache = {
  expiresIn: 15 * 60 * 1000, // 15 minute
  staleIn: 10 * 60 * 1000, // 10 minutes
  staleTimeout: 100
};

config.good = {

};

module.exports = config;
