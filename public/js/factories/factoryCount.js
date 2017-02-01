((app) => {
    'use strict'
    app.factory('factorigame', function($q, $http) {
        return {
            count: 0
        }
    })

})(require('angular').module('app.factories'))
