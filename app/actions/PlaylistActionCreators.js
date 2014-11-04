'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var PlaylistActionCreators = {

    fetchAll: function () {
        PlaylistActionCreators.receiveAll([
            {
                'id':'one',
                'label':'ONE'
            },
            {
                'id':'two',
                'label':'TWO'
            }
        ]);
    },

    init: function (data) {
        AppDispatcher.dispatch({
            type: AppConstants.ActionTypes.Playlist.INIT,
            data: data
        });
    },

    receiveAll: function (data) {
        AppDispatcher.dispatch({
            type: AppConstants.ActionTypes.Playlist.RECEIVE_ALL,
            data: data
        });
    }

};

module.exports = PlaylistActionCreators;