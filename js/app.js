var flightinfoApp = angular.module('flightinfoApp', [
    'ngRoute',
    'flightInfoControllerM',
    'ui.bootstrap'
]);

flightinfoApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/home', {
                templateUrl: 'homebody.html',
                controller: 'HCtrl'
            }).
            when('/page2',{
                templateUrl:'flightinfo.html',
                controller: 'DatepickerDemoCtrl'
            }).
            otherwise({
                redirectTo: '/home'
            });
    }
]);