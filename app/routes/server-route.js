'use strict';

var React = require('react');
var router = require('../router.js');
var boom = require('boom')
var JSONStringifySafe = require('json-stringify-safe');
var App = React.createFactory(require('../app.js'));
var RootView = React.createFactory(require('../pages/BasePage/BasePage.js'));
var fetcher = require('../fetcher.js');

module.exports = {
  method: 'GET',
  path: '/{p*}',
  handler: serverRouteHandler
};

var DOCTYPE = '<!DOCTYPE>';

function serverRouteHandler(request, reply) {
  var routeMatch = router.getRouteByPath(request.path);
  if (!routeMatch) {
    return reply(boom.notFound());
  }

  if (request.path.endsWith('/') && !routeMatch.path.endsWith('/')) {
    var uri = request.path.substr(0, request.path.length -1);
    if (request.url.search) {
      uri += request.url.search;
    }
    return reply.redirect(uri);
  }

  var props = {
    path: request.path,
    query: request.query,
    params: routeMatch.params,
    data: {
      i18n: {},
      locale: 'sv-SE',
      about: {},
      playlists: [],
      newReleases: [],
      startSections: [],
      newsFeed: []
    }
  };

  fetcher(routeMatch.fetcher, function (err, result) {
    if (err) {
      return reply(err);
    }

    Object.assign(props.data, result);

    var rootProps = {
      app: App(props),
      bootData: JSONStringifySafe(props)
    };

    var markup = DOCTYPE + React.renderToStaticMarkup(RootView(rootProps));

    reply(markup);
  });
}
