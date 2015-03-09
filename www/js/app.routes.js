(function() {
	'use strict';
    
    /**
     * Define application's routes for page navigation using 
     * UI-Router (http://bit.ly/1qAtKAl).
     */
	angular
		.module('app')
		.config(function ($stateProvider, $urlRouterProvider) {
            //** abstract route for sidemenu
            $stateProvider.state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'templates/sidemenu.tpl.htm',
                controller: 'sidemenu'
            });

            //** Overview
            $stateProvider.state('app.home', {
                url: '/home',
                views: {
                    'main': {
                        templateUrl: 'templates/home.tpl.htm',
                        controller: 'home'
                    }
                }
            });

            //** Create Request
            $stateProvider.state('app.create', {
                url: '/create',
                views: {
                    'main': {
                        templateUrl: 'templates/createRequest.tpl.htm',
                        controller: 'createRequest'
                    }
                }
            });

            //** Settings
            $stateProvider.state('app.settings', {
                url: '/settings',
                views: {
                    'main': {
                        templateUrl: 'templates/settings.tpl.htm',
                        controller: 'settings'
                    }
                }
            });

            //** Help
            $stateProvider.state('app.help', {
                url: '/help',
                views: {
                    'main': {
                        templateUrl: 'templates/help.tpl.htm',
                        controller: 'help'
                    }
                }
            });

                ///////////////////////////VIEWS
            //** Pending Approval
            $stateProvider.state('app.pendingapproval', {
                url: '/pendingapproval',
                views: {
                    'main': {
                        templateUrl: 'templates/view.tpl.htm',
                        controller: 'pendingapproval'
                    }
                }
            });
            //** Approved
            $stateProvider.state('app.approved', {
                url: '/approved',
                views: {
                    'main': {
                        templateUrl: 'templates/view.tpl.htm',
                        controller: 'approved'
                    }
                }
            });
            //** Rejected
            $stateProvider.state('app.rejected', {
                url: '/rejected',
                views: {
                    'main': {
                        templateUrl: 'templates/view.tpl.htm',
                        controller: 'rejected'
                    }
                }
            });
            //Open Request
            $stateProvider.state('app.request', {
                url: '/request/:unid',
                views: {
                    'main': {
                        templateUrl: 'templates/request.tpl.htm',
                        controller: 'request'
                    }
                }
            });







            //** Default
            $urlRouterProvider.otherwise('/app/home');
        });
})();