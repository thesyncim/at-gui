'use strict';

/* Controllers */

angular.module('anyTunnel.controllers', [])
    .controller('DashboardCtrl', ['$scope','Nodes', function ($scope,Nodes) {
        $scope.searchQuery="";

        $scope.search= function(searchQuery){
            //get latest event
            Nodes.search({id: searchQuery},
                function (response) {
                    $scope.nodes = response;

                }, function (error) {
                    console.log("error");
                    alert(error)

                });

        }

    }])
    .controller('NodeInfoCtrl', ['$scope','$routeParams','Nodes', function ($scope,$routeParams,Nodes) {
        $scope.node = {};

        Nodes.get({id:$routeParams.id},
            function (response) {
            $scope.node = response;

        }, function (error) {
            console.log("error");
            alert(error)

        })



    }]);
