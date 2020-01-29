'use strict';

angular.module('myApp.account', ['ngRoute', 'ui.bootstrap'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/account/signIn', {
            templateUrl: 'app/components/account/signIn.html',
            controller: 'signInUpCtrl'
        }).when('/account/signUp', {
            templateUrl: 'app/components/account/signUp.html',
            controller: 'signInUpCtrl'
        }).when('/account/user', {
            templateUrl: 'app/components/account/user.html',
            controller: 'accountPageCtrl'
        })
    }])

    .controller('signInUpCtrl', ['$scope', '$location', 'messageService', function ($scope, $location, messageService) {

        $scope.user = {mail: '', psw: ''};
        $scope.new_user = {nick: '', mail: '', psw: '', rePsw: ''};
        $scope.msg = messageService.setMsg(null);


        var auth = firebase.auth();


        auth.onAuthStateChanged(function (firebaseUser) {
            if (firebaseUser) {
                console.log('signed in as', firebaseUser.uid);
                $location.path("/account/user").replace();
                $scope.$apply()
            }
        });

        $scope.signIn = function (mail, psw) {

            // console.log(mail);


            auth.signInWithEmailAndPassword(mail, psw)
                .then(function (user) {
                    $location.path("/account/user").replace();
                    $scope.$apply()
                }).catch(function (error) {
                messageService.setMsg(error);
                $scope.msg = messageService.getMsg();
                console.log(error);
                $scope.$apply();
            })
        };

        $scope.signUp = function (mail, psw) {

            auth.createUserWithEmailAndPassword(mail, psw).then(function (response) {
                console.log(response);
                $location.path("/account/user").replace();
                $scope.$apply()

            }).catch(function (error) {
                $scope.error = error;
                console.log('errno:' + error);

            })
        }


    }])

    .controller('accountPageCtrl', ['$scope', '$location', '$uibModal', 'messageService', '$anchorScroll', '$http', function ($scope, $location, $uibModal, messageService, $anchorScroll, $http) {

        var auth = firebase.auth();
        var user = auth.currentUser;

        $location.hash('top');
        $anchorScroll();


        if (user) {
            $scope.veryUser = user.emailVerified;
            console.log(user);
            messageService.setMsg("Logout Successfully");
        } else {
            console.log('no user');
        }

        auth.onAuthStateChanged(function (firebaseUser) {
            if (firebaseUser) {
                console.log('signed in as', firebaseUser.uid);
                $scope.emailUser = firebaseUser.email;
                $scope.$apply();
            } else {
                console.log('signed out');
                $location.path("/account/singIn").replace();
                $scope.$apply()
            }
        });

        $scope.openUpdateUserModal = function (size) {

            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'app/components/account/modal/updateUser-modal.html',
                controller: 'updateUserModal',
                size: size,
                resolve: {
                    items: function () {
                        return $scope.items;
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {

            });
        };

        $scope.openNewTournamentModal = function (size) {

            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'app/components/account/modal/newTournament-modal.html',
                controller: 'newTournamentModal',
                size: size,
                resolve: {
                    items: function () {
                        return $scope.items;
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {

            });
        };


        $scope.openManageTournamentModal = function (items) {


            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'app/components/account/modal/manageTournament-modal.html',
                controller: 'manageTournamentModal',
                resolve: {
                    items: function () {
                        return {items: items}
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {

            });
        };

        $scope.toggleAnimation = function () {
            $scope.animationsEnabled = !$scope.animationsEnabled;
        };

        $scope.signOut = function () {
            auth.signOut();
        };


        $http.get('app/components/account/accountTournament.json').then(function (response) {

            $scope.tournaments = response.data;

            console.log(response.data);
        }, function (response) {
            $scope.data = response.data || 'Request failed';
            $scope.status = response.status;
        });


    }])


    .controller('updateUserModal', function ($scope, $uibModalInstance, items) {

        $scope.items = items;
        $scope.selected = {};

        $scope.new_user = {nick: '', psw: '', rePsw: '', imageSrc: ''};

        $scope.ok = function () {
            $uibModalInstance.close($scope.selected.item);
            console.log($scope.new_user);
        };

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };


        $scope.$on("fileProgress", function (e, progress) {
            $scope.progress = progress.loaded / progress.total;
        });


    })

    .controller('newTournamentModal', function ($scope, $uibModalInstance, items) {
        $scope.items = items;
        $scope.selected = {};

        $scope.new_tournament = {
            title: '',
            description: '',
            game: '',
            players: '',
            img: '',
            date: ''
        };


        $scope.createTournament = function () {
            $uibModalInstance.close($scope.selected.item);
            console.log($scope.new_tournament);
        };

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };


    })

    .controller('manageTournamentModal', function ($scope, $uibModalInstance, items) {



        console.log(items);

        $scope.title = items.items;


        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };

    });


