'use strict';

var after = require('after');
var server = require('./server.js');

function fetcher(items, cb) {
  var result = {};

  var next = after(items.length, done);

  function done(err) {
    return cb(err, result);
  }

  items.forEach(function (obj) {
    var method = server.methods[obj.method];

    if (!method) {
      console.log(obj.method + ' server method not found');
      return;
    }

    method(function (err, data) {
      if (err) {
        return next(err);
      }

      result[obj.name] = data;

      next();
    });
  });

}

module.exports = fetcher;
