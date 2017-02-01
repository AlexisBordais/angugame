((app) => {
  'use strict'
  app.config(['$stateProvider', ($stateProvider, $urlRouterProvider, $locationProvider) => {
      $stateProvider
      .state('app.stageThree', {
          url: '/stageThree',
          template: '<stage-three></stage-three>'
      })
  }])
})(require('angular').module('app.stageThree', []))
