var flightinfoApp = angular.module('flightinfoApp', [
    'ngRoute','ui.bootstrap', 'ngTouch']);
// ngRoute, ui.bootstrap for native directives for Bootstrap

flightinfoApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/home', {
                templateUrl: 'homebody.html'
            }).
            when('/page2',{
                // flight form page
                templateUrl:'flightinfo.html'
            }).
            when('/page3',{
                // each flight detailed display
                templateUrl:'flightinfodetails.html',
                controller: 'FlightDetailedCtrl'
            }).
            otherwise({
                redirectTo: '/home'
            });
    }
]);