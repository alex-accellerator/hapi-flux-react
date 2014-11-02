'use strict';

module.exports = {
    method: 'GET',
    path: '/static/{p*}',
    handler: {
        directory: {
            path: './server/static',
            index: false,
            listing: false,
            showHidden: false
        }
    }
};