((app) => {
  'use strict';
  app.component('home', {
    templateUrl: 'js/component/home/home.html',
    controller: function(){
      this.keyPress = () => {
        console.log('key press ')
      }
      // Si je veux utiliser le chgt de route par le js
      // this.go = function(path){
      //   $state.go(path)
      // }
      //et mettre $state en parma ds le ctrlller
    }
  })
})(angular.module('app.home'))
