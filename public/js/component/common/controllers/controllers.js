((app) => {
    "use strict"
    app.component('controllers', {
        bindings: {
            x: "="
        },
        templateUrl: 'js/component/common/controllers/controllers.html'
    })

})(require('angular').module('app.common'))
