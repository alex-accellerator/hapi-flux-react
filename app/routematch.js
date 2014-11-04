'use strict';

var pathToRegexp = require('path-to-regexp');

var options = {
  sensitive: true,
  strict: false,
  end: true
};

function pathMatch(path) {
  var keys = [];
  var re = pathToRegexp(path, keys, options);

  return function (pathname, params) {
    var m = re.exec(pathname);
    if (!m) return false;

    params = params || {};

    var key;
    var param;
    var i;

    for (i = 0; i < keys.length; i++) {
      key = keys[i];
      param = m[i + 1];

      if (!param) continue;

      params[key.name] = decodeParam(param);

      if (key.repeat) params[key.name] = params[key.name].split(key.delimiter)
    }

    return params;
  }
}

function decodeParam(param) {
  return decodeURIComponent(param);
}

module.exports = pathMatch;
