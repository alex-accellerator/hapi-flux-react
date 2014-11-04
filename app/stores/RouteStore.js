'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/AppConstants.js');
var createStore = require('../createstore.js');

var state = {
  currentPath: '/',
  history: {}
};

function init(data) {
  state = data;
}

function changePath(path) {
  state.currentPath = path;
}

function onDispatch(action) {
  switch (action.type) {

    case Constants.ActionTypes.Route.INIT:
      init(action.data);
      RouteStore.informSubscribers();
      break;

    case Constants.ActionTypes.Route.CHANGE:
      changePath(action.path);
      RouteStore.informSubscribers();
      break;

  }
}

var RouteStore = createStore({

  dispatchToken: AppDispatcher.register(onDispatch),

  getCurrentPath: function () {
    return state.currentPath;
  }

});

module.exports = RouteStore;
