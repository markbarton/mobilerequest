
(function () {
    'use strict';

    angular
        .module('app')
        .controller('request', Request);

    function Request($scope, GENERAL_CONFIG,dominoAPI,$stateParams,$ionicLoading,$state,$timeout) {
        $scope.dbTitle = GENERAL_CONFIG.DB_TITLE

        $scope.requestData = {};

        dominoAPI.getRequestByUNID($stateParams.unid).then(function (success) {
            if (success.data) {
                $scope.requestData = success.data[0]

            }
        })

        $scope.isApproved=function(){
            return ($scope.requestData.status=='Approved')
        }
        $scope.isRejected=function(){
            return ($scope.requestData.status=='Rejected')
        }

        $scope.showActionButtons=function(){
            return (GENERAL_CONFIG.CURRENT_USER==$scope.requestData.approver && $scope.requestData.status=='Pending Approval')
        }

        $scope.approve=function(){
            dominoAPI.approveRequest($stateParams.unid).then(function (success) {
                if (success.data) {
                    //Display alert
                    $ionicLoading.show({ template: 'Request Approved', noBackdrop: true, duration: 2000 })
                    $timeout(function() {
                       $state.go('app.home');
                    }, 2200);
                }
            })

        }
        $scope.reject=function(){
            dominoAPI.rejectRequest($stateParams.unid).then(function (success) {
                if (success.data) {
                    //Display alert
                    $ionicLoading.show({ template: 'Request Rejected', noBackdrop: true, duration: 2000 })
                    $timeout(function() {
                        $state.go('app.home');
                    }, 2200);
                }
            })
        }

    }

})();