var myApp = angular.module('MyApp', ['ui.router'])
    .config(function($urlRouterProvider, $stateProvider, $locationProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state("login", {
                url: "/",
                templateUrl: '/views/login.html',
                controller: 'loginController'
            })
            .state("messages", {
                url: "/messages",
                templateUrl: '/views/messages.html',
                controller: 'messageController',
                params: {
                    currentUserId: null
                }
            });

        // $locationProvider.html5Mode(true);

    });