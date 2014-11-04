'use strict';
//var km = require('keyMirror');

var ActionTypes = {
    Route: {
        INIT: null,
        CHANGE: null
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