'use strict';
require('es6-shim');
var Hapi = require('hapi');
var config = require('./config.js');


var server = module.exports = new Hapi.Server(
  config.server.host, config.server.port, config.server.options
);

var serverPlugins = [{
  plugin: require('good'),
  options: config.good
}];

server.pack.register(serverPlugins, function (err) {
  if (err) {
    throw err;
  }

  server.route(require('./routes/server-route.js'));
  server.route(require('./routes/static-route.js'));

  server.start(function () {
    server.log('info', 'Server started: ' + server.info.uri);
  });
});
