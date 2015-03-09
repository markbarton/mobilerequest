var app=angular.module('app')

app.factory('dominoAPI',  function dominoAPI($http,configAPI) {


    var config=configAPI;

    function getHomePage(){
        return $http({
            method: 'GET',
            url: configAPI.currentEndPoint+'/(LUKeywordJSON)/HomePage'
        });
    }
        function getHelp(){
            return $http({
                method: 'GET',
                url: configAPI.currentEndPoint+'/(LUKeywordJSON)/Help'
            });
        }

    function getRequestByStatus(status){
        return $http({
            method:'GET',
            url:configAPI.currentEndPoint+'/requestbystatus.json?openpage&status='+status
        })
    }

    function getRequestByUNID(unid){
        return $http({
            method:'GET',
            url:configAPI.currentEndPoint+'/requestbyunid.json?openpage&unid='+unid
        })
    }

    function saveDominoEndpoint(endPoint){
        //Need to post to a domino form - this form will process the input and update the keyword
      return  $http({
            url: configAPI.currentEndPoint + '/updatekeyword?createdocument',
            method: "POST",
            data: {"endpoint":endPoint},
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })

    }
    function submitRequest(formObj){
        //Need to post to a domino form - this form will process the input and update the keyword
      return  $http({
            url: configAPI.currentEndPoint + '/request?createdocument',
            method: "POST",
            data: formObj,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })

    }

    function approveRequest(unid){
        return $http({
            url:configAPI.currentEndPoint+'/workflow?openagent&unid='+unid+'&status=approve',
            method:'GET'
        })
    }
    function rejectRequest(unid){
        return $http({
            url:configAPI.currentEndPoint+'/workflow?openagent&unid='+unid+'&status=reject',
            method:'GET'
        })
    }
    function getApprovers(){
       return $http({
                method: 'GET',
                url: configAPI.currentEndPoint+'/approvers.json'
            });
    }

        return {
            getHelp: getHelp,
            getRequestByStatus:getRequestByStatus,
            getRequestByUNID:getRequestByUNID,
            getHomePage:getHomePage,
            saveDominoEndpoint:saveDominoEndpoint,
            approveRequest:approveRequest,
            rejectRequest:rejectRequest,
            getApprovers:getApprovers,
            submitRequest:submitRequest
        };
});