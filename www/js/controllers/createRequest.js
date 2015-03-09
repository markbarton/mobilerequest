(function () {
    'use strict';

    angular
        .module('app')
        .controller('createRequest', CreateRequest);

    function CreateRequest($scope, GENERAL_CONFIG,dominoAPI,$stateParams,$ionicLoading,$state,$timeout ) {
        $scope.dbTitle = GENERAL_CONFIG.DB_TITLE
        $scope.formObj={}
        $scope.formObj.approvers=[];

        dominoAPI.getApprovers().then(function(success){
            $scope.formObj.approvers=success.data.approvers;

        })
        $scope.submitRequest=function(){
            $scope.formObj.status="Pending Approval";
            dominoAPI.submitRequest($scope.formObj).then(function (success) {
                if (success.data) {
                    //Display alert
                    $ionicLoading.show({ template: 'Request Submitted', noBackdrop: true, duration: 2000 })
                    $timeout(function() {
                        $state.go('app.home');
                    }, 2200);
                }
            })

        }

        $scope.updateEditor = function() {
            var element = document.getElementById("TextArea");
            element.style.height = element.scrollHeight + "px";
        };
    }
})();