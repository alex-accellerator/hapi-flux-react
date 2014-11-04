'use strict';

var wreck = require('wreck');

function getPlaylists(cb) {
    var uri = 'https://api.filtr.com/2.1/se/se/playlists';

    var options = {
        json: true
    };

    wreck.get(uri, options, function (err, response, payload) {
        if (err) {
            return cb(err);
        }

        var playlists = payload.map(function (item) {
            delete item.tags;
            return item;
        });

        return cb(null, playlists);
    });
}

module.exports = getPlaylists;