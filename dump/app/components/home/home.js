'use strict';

angular.module('myApp.home', ['ngRoute'])


    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'app/components/home/home.html',
            controller: 'homeCtrl'
        }).when('/', {
            templateUrl: 'app/components/home/home.html',
            controller: 'homeCtrl'
        });
    }])


    .controller('homeCtrl', ['$scope', '$http','messageService', function ($scope, $http,messageService) {


        $scope.msg = messageService.getMsg();


        $scope.selectGameCategory = function (pos) {
            $scope.selectedCategory = pos;
        };



        $http.get('app/components/home/porcodio.json').then(function (response) {

            $scope.tournaments = response.data;

            console.log(response.data);
        }, function (response) {
            $scope.data = response.data || 'Request failed';
            $scope.status = response.status;
        });


    }])
;