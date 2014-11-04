'use strict';

require('es6-shim');
var React = require('react');
var App = React.createFactory(require('./app.js'));
var RouteActionCreators = require('./actions/RouteActionCreators.js');

function onDOMContentLoaded() {
  document.removeEventListener('DOMContentLoaded', onDOMContentLoaded);

  var mountNode = document.getElementById('root');
  var bootData = document.getElementById('bootdata').innerHTML;
  var props = JSON.parse(bootData);


  React.render(App(props), mountNode);
}

function onPopState(event) {
  RouteActionCreators.changeRouteTo(window.location.pathname, false);
}

document.addEventListener('DOMContentLoaded', onDOMContentLoaded);
window.addEventListener('popstate', onPopState);
