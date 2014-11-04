'use strict';

var ActionTypes = require('../constants/AppConstants');
var AppDispatcher = require('../dispatcher/AppDispatcher');

var RouteActionCreators = {
  
  changeRouteTo: function (path, shouldPushState) {
    AppDispatcher.dispatch({
      type: ActionTypes.Route.CHANGE,
      path: path
    });

    if (shouldPushState !== false) {
      window.history.pushState(null, null, path);
    }
  }

};

module.exports = RouteActionCreators;
