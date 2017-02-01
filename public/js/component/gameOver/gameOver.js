((app) => {
    'use strict';
    app.component('gameOver', {
        templateUrl: 'js/component/gameOver/gameOver.html',
        controller: ['$state','factorigame', function($state,factorigame) {
            this.score = factorigame.count
                // Si je veux utiliser le chgt de route par le js
                // this.go = function(path){
                //   $state.go(path)
                // }
                //et mettre $state en parma ds le ctrlller

            this.reloadRoute = function() {
              factorigame.count = 0
                $state.go('app.home')
            };
        }]
    })
})(require('angular').module('app.gameOver'))
