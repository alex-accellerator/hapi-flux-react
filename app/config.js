var config = {};

config.env = process.env.NODE_ENV || 'development';

config.server = {
  host: process.env.SERVER_HOST,
  port: process.env.SERVER_PORT || 8001,
  options: {}
};

config.good = {

};

module.exports = config;
