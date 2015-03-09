(function () {
    'use strict';
    
    angular
        .module('app')
        .controller('settings', Settings);

    function Settings($scope, GENERAL_CONFIG,dominoAPI,configAPI,$ionicLoading) {
        $scope.dbTitle=GENERAL_CONFIG.DB_TITLE

        $scope.formObj={};
        if(configAPI.currentEndPoint){
            $scope.formObj.dominoEndPoint=configAPI.currentEndPoint;
        }else{
            $scope.formObj.dominoEndPoint=GENERAL_CONFIG.DOMINO_URL;
}

        $scope.saveEndpoint=function(){

            if($scope.formObj.isChecked){
                dominoAPI.saveDominoEndpoint($scope.formObj.dominoEndPoint).then(function(success){
                    configAPI.currentEndPoint=$scope.formObj.dominoEndPoint
                    $ionicLoading.show({ template: 'Settings Updated Locally and Server Side', noBackdrop: true, duration: 2000 });
                })
            }else{
                configAPI.currentEndPoint=$scope.formObj.dominoEndPoint
                $ionicLoading.show({ template: 'Settings Updated', noBackdrop: true, duration: 2000 });

            }
            }
              }
})();