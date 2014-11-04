'use strict';
//var km = require('keyMirror');

var ActionTypes = {
    Route: {
        INIT: null,
        CHANGE: null
    },
    Playlist: {
        INIT: null,
        CLICK_PLAYLIST: null,
        RECEIVE_ALL: null
    }
};

Object.keys(ActionTypes).forEach(function (category) {
    Object.keys(ActionTypes[category]).forEach(function (actionType) {
        ActionTypes[category][actionType] = category + '.' + actionType
    });
});

module.exports = {
    'ActionTypes':ActionTypes
};