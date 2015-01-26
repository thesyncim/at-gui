'use strict';


// Declare app level module which depends on filters, and services
angular.module('anyTunnel', [
  'ngRoute',
  'ngResource',
  'angularMoment',
  'anyTunnel.filters',
  'anyTunnel.services',
  'anyTunnel.directives',
  'anyTunnel.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/dashboard', {templateUrl: 'partials/dashboard.html', controller: 'DashboardCtrl'});
  $routeProvider.when('/nodes/:id', {templateUrl: 'partials/node.html', controller: 'NodeInfoCtrl'});
  $routeProvider.otherwise({redirectTo: '/dashboard'});
}]).value("apiaddr", "http://proxy.alpeca3d.com:8081");;
