((app) => {
    'use strict';
    app.component('riddlesList', {
        bindings: {
            good: "=",
            badAnswer: "="
        },
        templateUrl: 'js/component/common/riddlesList/riddlesList.html',
        controller: ['$http', 'factoriddle', 'factorigame', function($http, factoriddle, factorigame) {

            // $http.get('/angugame').then((response) => {
            //   this.riddles = response.data
            // })

            // appel de la collection de la factory
            factoriddle.getRiddles().then((riddles) => {
                this.answer = riddles.sort(function() {
                    return 0.5 - Math.random();
                })[0]
            })


            this.selectResponse = (selectedResponse) => {
                if (selectedResponse.correct) {
                    //SUPPRIME L'EGNIME DE LA FACTORY
                    factoriddle.riddles = factoriddle.riddles.filter((el) => {
                        return el.question !== this.answer.question
                    })
                    this.good = true
                    factorigame.count++
                } else {
                  this.badAnswer = true
                }
            }

        }]
    })
})(require('angular').module('app.common'))
