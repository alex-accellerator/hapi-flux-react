'use strict';

var React = require('react');
var RootView = React.createFactory(require('../components/root/root-view.jsx'));

var docType = '<!DOCTYPE html>';

function getRootViewMarkup(props, cb) {
  var component = RootView(props);
  var markup;

  try {
    markup = React.renderToStaticMarkup(component);
  } catch (e) {
    return cb(e);
  }
  return cb(null, docType + markup);
}

module.exports = getRootViewMarkup;
