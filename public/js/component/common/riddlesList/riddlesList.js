((app) => {
  'use strict';
  app.component('riddlesList', {
    templateUrl: 'js/component/common/riddlesList/riddlesList.html',
    controller: ['$http', function($http) {

      this.riddles = []

      $http.get('riddles.json').then((response) => {
        this.riddles = response.data
      })

    }]
  })
})(angular.module('app.common'))
