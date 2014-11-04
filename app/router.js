'use strict';

var React = require('react');
var routeMatch = require('./routematch.js');

var routes = [{
  path: '/',
  name: 'start',
  component: React.createFactory(require('./pages/StartPage/StartPage')),
  fetcher: []
},
{
  path: '/about',
  name: 'about',
  component: React.createFactory(require('./pages/AboutPage/AboutPage')),
  fetcher: []
}];

var router = {
  
  getRouteByPath: function (path) {
    var match = routeMatch(path);

    return routes.find(function (r) {
      return match(r.path);
    });
  }

};

module.exports = router;
