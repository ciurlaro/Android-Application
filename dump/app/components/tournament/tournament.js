angular.module('myApp.tournament', ['ngRoute'])


    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/browse-tournament/:id_tournament', {
            templateUrl: 'app/components/tournament/tournament.html',
            controller: 'tournamentCtrl'
        }).when('/browse-tournament', {
            templateUrl: 'app/components/tournament/browse-tournament.html',
            controller: 'browseCtrl'
        })
    }])


    .controller('tournamentCtrl', ['$scope', '$http', '$route', function ($scope, $http, $route) {

        var param = $route.current.params;


        $http.get('app/components/home/porcodio.json').then(function (response) {


            var i = parseInt(param.id_tournament);

            $scope.tournament = response.data[i];
            console.log(  $scope.tournament )




        }, function (response) {
            $scope.data = response.data || 'Request failed';
            $scope.status = response.status;
        });


    }])


    .controller('browseCtrl', ['$scope', '$http', '$location', '$anchorScroll', function ($scope, $http, $location, $anchorScroll) {

        $location.hash('top');
        $anchorScroll();

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


    }]);

