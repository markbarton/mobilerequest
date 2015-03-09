var app=angular.module('app')

app.service('configAPI',  function configAPI(GENERAL_CONFIG) {
    var config=this;
    config.currentEndPoint=GENERAL_CONFIG.DOMINO_URL

});