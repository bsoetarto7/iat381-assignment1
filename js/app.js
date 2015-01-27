var flightinfoApp = angular.module('flightinfoApp', [
    'ngRoute',
    'flightInfoControllerM',
    'ui.bootstrap'
]);
// ngRoute, ui.bootstrap for native directives for Bootstrap

flightinfoApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/home', {
                templateUrl: 'homebody.html',
                controller: 'HCtrl'
            }).
            when('/page2',{
                // flight form page
                templateUrl:'flightinfo.html'
                // controller: 'DatepickerDemoCtrl'
            }).
            when('/page3',{
                // each flight detailed display
                templateUrl:'flightinfodetails.html',
                controller: 'flightDetailedController'
            }).
            otherwise({
                redirectTo: '/home'
            });
    }
]);