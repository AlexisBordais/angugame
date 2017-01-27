// ((app) => {
//   'use strict';
//   app.component('gorilla', {
//     templateUrl: 'js/component/common/gorilla/gorilla.html',
//     controller: function($document){
//       let $ctrl = this
//
//
//
//       let gogo = $document[0].getElementById('gogo')
//         let  i = gogo.style.left || 0, // On récupère la position absolue initiale.
//           j = gogo.style.top;
//       document.onkeydown = function(event){
//           var event = event || window.event,
//               keyCode = event.keyCode;
//
//           // On détecte l'événement puis selon la fleche, on incrémente ou décrément les variables globales de position, i et j.
//           switch(keyCode){
//           case 38:
//               j-=100;
//               break;
//           case 40:
//               j+=100;
//               break;
//           case 37:
//               i-=100;
//               break;
//           case 39:
//               i+=100;
//               break;
//           }
//           // Et enfin on applique les modifications :
//           gogo.style.left = i+'px';
//           gogo.style.top  = j+'px';
//
//           $ctrl.boxTrex = (i >= 620);
//           console.log(i, $ctrl.boxTrex)
//       }
//     }
//   })
// })(angular.module('app.common'))

((app) => {
    "use strict"
    app.component('gorilla', {
        bindings: {
            x: '<'
        },
        templateUrl: 'js/component/common/gorilla/gorilla.html',
        controller: function($document) {
            let gogo = $document[0].getElementById('gogo');
            angular.extend(this, {
                $onInit(){
                  this.x = Number(gogo.style.left.split('px')[0]) || 0
                },
                $onChanges(changes) {
                    if (changes.x.currentValue) {
                        gogo.style.left = this.x * 10 + 'px'
                    }
                }
            })
        }
    })
})(require('angular').module('app.common'))
