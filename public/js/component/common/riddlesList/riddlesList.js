((app) => {
    'use strict';
    app.component('riddlesList', {
        bindings: {
            good: "="
        },
        templateUrl: 'js/component/common/riddlesList/riddlesList.html',
        controller: ['$http', 'factoriddle', function($http, factoriddle) {

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
                }
            }

        }]
    })
})(require('angular').module('app.common'))
