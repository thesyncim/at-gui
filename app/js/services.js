'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('anyTunnel.services', []).
    factory("Nodes", function ($resource, apiaddr) {
       var node= $resource(apiaddr + '/nodes/:id', {id: '@id'},

            { all: {method: 'get', url: apiaddr + '/nodes/', isArray: true},
             search: {method: 'get', url: apiaddr + '/nodes/search/:id', isArray: true}});

        return node;



    }).
    value('version', '0.1');
