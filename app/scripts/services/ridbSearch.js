'use strict';

angular.module('myAmericaApp').factory('RidbSearch', function($resource, RIDB_API_URL, RIDB_API_KEY) {
  var RidbSearch = $resource(RIDB_API_URL  + '/recareas');

  function get(params, callback) {
    RidbSearch.get(params, callback);
  }

  return {
    get: get
  }
});
