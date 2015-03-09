(function () {
    'use strict';

    angular
        .module('app')
        .controller('help', Help);

    function Help($scope,GENERAL_CONFIG,dominoAPI ) {
        $scope.helpContent="";
        $scope.dbTitle=GENERAL_CONFIG.DB_TITLE
        dominoAPI.getHelp().then(function(success){
            $scope.helpContent=decodeURIComponent(success.data.content)

        })
    }
})();