var Hapi = require('hapi');
var configs = require('configs');
var methods = require('./methods');
var routes = require('./routes');

// Create a server with a host and port.
var server = new Hapi.Server(configs.hapi.host, configs.hapi.port, configs.hapi.options);

server.pack.register([], function (err) {
    if (err) {
        throw err;
    }

    // Add all routes in the routes folder.
    for (var route in routes) {
        if (routes.hasOwnProperty(route)) {
            server.route(routes[route]);
        }
    }

    // Add all server methods in the methods folder.
    for (var method in methods) {
        if (methods.hasOwnProperty(method)) {
            server.method(methods[method]);
        }
    }

    // Start the server.
    server.start(function () {
        console.log('Server running at:', server.info.uri);
    });

});