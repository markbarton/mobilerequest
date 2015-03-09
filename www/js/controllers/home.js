(function () {
    'use strict';

    angular
        .module('app')
        .controller('home', Home);

    function Home($scope,GENERAL_CONFIG,dominoAPI) {

        $scope.homeContent="";
        $scope.dbTitle=GENERAL_CONFIG.DB_TITLE
             dominoAPI.getHomePage().then(function(success){
         $scope.homeContent=decodeURIComponent(success.data.content)

         })
    }
})();