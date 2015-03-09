(function () {
    'use strict';

    angular
        .module('app')
        .controller('pendingapproval', PendingApproval);

    function PendingApproval($scope, GENERAL_CONFIG,dominoAPI,$state) {
        $scope.dbTitle=GENERAL_CONFIG.DB_TITLE
        $scope.status='Pending Approval';
        $scope.viewData={};

        dominoAPI.getRequestByStatus('PendingApproval').then(function(success){
            $scope.viewData=success.data

        })

        $scope.selectRequest=function(unid){
            console.log(unid)
            $state.go("app.request",{'unid':unid})
        }
    }
})();