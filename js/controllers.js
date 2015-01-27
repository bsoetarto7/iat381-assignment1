var flightInfoControllerM =angular.module('flightInfoControllerM',[]);


flightInfoControllerM.controller('HCtrl', function ($scope) {
  $scope.phones = [
    {'name': 'Nexus S',
     'snippet': 'Fast just got faster with Nexus S.'},
    {'name': 'Motorola XOOM™ with Wi-Fi',
     'snippet': 'The Next, Next Generation tablet.'},
    {'name': 'MOTOROLA XOOM™',
     'snippet': 'The Next, Next Generation tablet.'}
  ];
});


flightInfoControllerM.controller('FICtrl', function ($scope) {
  $scope.phones = [
    {'Destination': 'Nexus S',
     'snippet': 'Fast just got faster with Nexus S.'},
    {'From': 'Motorola XOOM™ with Wi-Fi',
     'snippet': 'The Next, Next Generation tablet.'},
    {'name': 'MOTOROLA XOOM™',
     'snippet': 'The Next, Next Generation tablet.'}
  ];
});

flightInfoControllerM.controller('DatepickerDemoCtrl', function ($scope) {
 $scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();

  $scope.clear = function () {
    $scope.dt = null;
  };

  // Disable weekend selection
  $scope.disabled = function(date, mode) {
    return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
  };

  $scope.toggleMin = function() {
    $scope.minDate = $scope.minDate ? null : new Date();
  };
  $scope.toggleMin();

  $scope.open = function($event) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope.opened = true;
  };

  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];
});

flightInfoControllerM.directive('datepickerPopup', function (dateFilter, datepickerPopupConfig) {
  return {
    restrict: 'A',
    priority: 1,
    require: 'ngModel',
    link: function(scope, element, attr, ngModel) {
      var dateFormat = attr.datepickerPopup || datepickerPopupConfig.datepickerPopup;
      ngModel.$formatters.push(function (value) {
        return dateFilter(value, dateFormat);
      });
    }
  };
});


flightInfoControllerM.controller('flightDetailedController', function ($scope) {
  $scope.flightInfo = [
    {'Flight': 'AC997',
     'leaving': 910,
     'price': 2000,
     'Air_line': 'Air Canada',
     'image': 'AirCanada.png'
   },
    {'Flight': 'DL4849',
     'leaving': 1010,
     'price': 1900,
     'Air_line': 'Delta Air Lines',
     'image': 'Delta.png'
   },
   {'Flight': 'WS3255',
     'leaving': 1010,
     'price': 2100,
     'Air_line': 'WestJet',
     'image': 'WestJet.png'
   },
    {'Flight': 'CX838',
     'leaving': 1940,
     'snippet': 'The Next, Next Generation tablet.',
     'price': 2800,
     'Air_line': 'Cathay Pacific Airways',
     'image': 'CathayPacific.png'
   }
  ];

  $scope.orderProp = 'Air_line';
  $scope.orderProp = 'leaving';
  $scope.orderProp = 'price';
});


