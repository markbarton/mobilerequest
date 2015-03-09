(function () {
    'use strict';

    angular
        .module('app')
        .controller('rejected', Rejected);

    function Rejected($scope, GENERAL_CONFIG,dominoAPI,$state) {
        $scope.dbTitle=GENERAL_CONFIG.DB_TITLE
        $scope.status='Rejected';

        $scope.viewData={};

        dominoAPI.getRequestByStatus('Rejected').then(function(success){
            $scope.viewData=success.data

        })

        $scope.selectRequest=function(unid){
            console.log(unid)
            $state.go("app.request",{'unid':unid})
        }
    }
})();