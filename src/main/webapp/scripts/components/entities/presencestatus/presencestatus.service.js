'use strict';

angular.module('thesisplatformApp')
    .factory('Presencestatus', function ($resource, DateUtils) {
        return $resource('api/presencestatuss/:id', {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    });
