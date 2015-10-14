(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1]);
