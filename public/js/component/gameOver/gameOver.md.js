  ((app) => {
    'use strict'
    app.config(['$stateProvider', ($stateProvider, $urlRouterProvider, $locationProvider) => {
        $stateProvider
        .state('app.gameOver', {
            url: '/gameOver',
            template: '<game-over></game-over>'
        })
    }])
})(require('angular').module('app.gameOver', []))
