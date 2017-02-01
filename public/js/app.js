((app) => {

    app.factory ('factoriddle', function($q, $http){
      return {
        riddles: [],
        getRiddles(){
          let deferred = $q.defer()
          if (this.riddles.length === 0){
            // Requete vers le serveur
            $http.get('/angugame').then((response) => {
              this.riddles = response.data
              deferred.resolve(this.riddles)
            })
          }else{
            // Retourne celle que l'on a
            deferred.resolve(this.riddles)
          }

          return deferred.promise
        }
      }
    })

})(require('angular').module('app', [
    require('angular-ui-router'),
    'app.common',
    'app.home',
    'app.gameOver',
    'app.stageOne',
    'app.stageTwo',
    'app.stageThree',
    'app.config',
    'app.factories'
]))
