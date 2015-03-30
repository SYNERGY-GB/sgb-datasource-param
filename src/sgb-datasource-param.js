'use strict';

angular.module('sgb-datasource-param', ['megazord'])
    .factory('sgb-datasource-param', ['$q', function ($q){
        return {
            getData: function(params) {
                var deferred = $q.defer();

                //This is simply a pass-through, as transform can handle the plucking out of this data object.
                deferred.resolve(params);

                return deferred.promise;
            }
        } ;
    }]);
