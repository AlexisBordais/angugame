((app) => {
  'use strict'
  app.config(['$stateProvider', ($stateProvider, $urlRouterProvider, $locationProvider) => {
      $stateProvider
      .state('app.stageTwo', {
          url: '/stageTwo',
          template: '<stage-two></stage-two>'
      })
  }])
})(angular.module('app.stageTwo', []))
