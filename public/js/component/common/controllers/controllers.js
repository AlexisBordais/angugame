((app) => {
    "use strict"
    app.component('controllers', {
        bindings: {
            x: "="
        },
        templateUrl: 'js/component/common/controllers/controllers.html'
    })

})(angular.module('app.common'))
