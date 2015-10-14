'use strict';

angular.module('sgb-datasource-param', ['megazord'])
    .factory('sgb-datasource-param', ['$q', 'lodash', function ($q, _){
        return {
            getData: function(params, event) {
                var deferred = $q.defer();

                //This is simply a pass-through, as transform can handle the plucking out of this data object.
                var eventData = event.params || {};
                deferred.resolve(_.merge({}, params, eventData));

                return deferred.promise;
            }
        } ;
    }]);
