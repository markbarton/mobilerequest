(function () {
    'use strict';

    angular
        .module('app')
        .controller('approved', Approved);

    function Approved($scope, GENERAL_CONFIG,dominoAPI,$state) {
        $scope.dbTitle=GENERAL_CONFIG.DB_TITLE
        $scope.status='Approved';

        $scope.viewData={};

        dominoAPI.getRequestByStatus('Approved').then(function(success){
            $scope.viewData=success.data

        })

        $scope.selectRequest=function(unid){
            console.log(unid)
            $state.go("app.request",{'unid':unid})
        }
    }
})();