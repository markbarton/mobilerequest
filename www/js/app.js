(function () {
    'use strict';

    /**
     * Define the main application module.
     */
    angular
        .module('app', ['ionic','app.config','http-post-fix'])     // include ionic, wijmo, and services modules
        .run(function ($ionicPlatform, $ionicLoading, $rootScope) {
            $ionicPlatform.ready(function () {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs).
                if (window.cordova && window.cordova.plugins.Keyboard) {
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                }

                if (window.StatusBar) {
                    StatusBar.styleDefault();
                }
            });

            //*** Show loading indicator between page transitions - mostly for when deployed
            $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
                $ionicLoading.show({
                    template: '<i class="icon ion-loading-b"></i>'
                });
            });
            $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
                $ionicLoading.hide();
            });
        });
// Modifies $httpProvider for correct server communication (POST variable format)
//Standard Module
    angular.module('http-post-fix', [], function ($httpProvider) {
        // This code is taken from http://victorblog.com/2012/12/20/make-angularjs-http-service-behave-like-jquery-ajax/

        // Use x-www-form-urlencoded Content-Type
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

        // Override $http service's default transformRequest
        $httpProvider.defaults.transformRequest = [function (data) {
            /**
             * The workhorse; converts an object to x-www-form-urlencoded serialization.
             * @param {Object} obj
             * @return {String}
             */
            var param = function (obj) {
                var query = '';
                var name, value, subName, fullSubName, subValue, innerObj, i;

                for (name in obj) {
                    value = obj[name];

                    if (value instanceof Array) {
                        for (i = 0; i < value.length; ++i) {
                            subValue = value[i];
                            fullSubName = name + '[' + i + ']';
                            innerObj = {};
                            innerObj[fullSubName] = subValue;
                            query += param(innerObj) + '&';
                        }
                    } else if (value instanceof Object) {
                        for (subName in value) {
                            subValue = value[subName];
                            fullSubName = name + '[' + subName + ']';
                            innerObj = {};
                            innerObj[fullSubName] = subValue;
                            query += param(innerObj) + '&';
                        }
                    } else if (value !== undefined && value !== null) {
                        query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
                    }
                }

                return query.length ? query.substr(0, query.length - 1) : query;
            };

            return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
        }];
    });


})();