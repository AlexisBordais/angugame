  ((app) => {
    'use strict'
    app.config(['$stateProvider', ($stateProvider, $urlRouterProvider, $locationProvider) => {
        $stateProvider
        .state('app.home', {
            url: '/',
            template: '<home></home>'
        })
    }])
})(angular.module('app.home', []))
