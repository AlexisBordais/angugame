((app) => {
  'use strict'
  app.config(['$stateProvider', ($stateProvider, $urlRouterProvider, $locationProvider) => {
      $stateProvider
      .state('app.stageOne', {
          url: '/stageOne',
          template: '<stage-one></stage-one>'
      })
  }])
})(require('angular').module('app.stageOne', []))
