'use strict';

module.exports = {
  method: 'GET',
  path: '/static/{p*}',
  handler: {
    directory: {
      path: './app/static',
      index: false,
      listing: false,
      showHidden: false
    }
  }
};
