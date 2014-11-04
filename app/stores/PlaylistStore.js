'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/AppConstants.js');
var createStore = require('../createstore.js');

var state = [];

function replaceState(data) {
    state = data;
}

function onDispatch(action) {
    switch (action.type) {

        case Constants.ActionTypes.Playlist.INIT:
            replaceState(action.data);
            PlaylistStore.informSubscribers();
            break;

        case Constants.ActionTypes.Playlist.CLICK_PLAYLIST:
            changePath(action.path);
            RouteStore.informSubscribers();
            break;
        default:

        case Constants.ActionTypes.Playlist.RECEIVE_ALL:
            replaceState(action.data);
            PlaylistStore.informSubscribers();
        break;
    }
}

var PlaylistStore = createStore({
    dispatchToken: AppDispatcher.register(onDispatch),
    getAll: function () {
        return state.slice(0);
    }
});

module.exports = PlaylistStore;
