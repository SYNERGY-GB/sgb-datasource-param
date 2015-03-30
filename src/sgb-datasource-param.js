'use strict';

angular.module('sgb-datasource-param', ['megazord'])
    .factory('_paramDatasource', [function (){
        return {
            getData: function(params) {
                //This is simply a pass-through, as transform can handle the plucking out of this data object.
                return params;
            }
        } ;
    }]);
