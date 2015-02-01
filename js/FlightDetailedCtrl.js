flightinfoApp.controller('FlightDetailedCtrl', function ($scope) {
  $scope.flightInfo = [
    {'Flight': 'AC997',
     'leaving': 0910,
     'returning:': 1030,
     'price': 2000,
     'Air_line': 'Air Canada',
     'image': 'AirCanada.png',

     'leavingFlightNo': 'AC999',
     'departLocationL' : 'Vanvouer',
     'arriveLocationL' : 'Hong Kong',
     'arrivelTimeL': 1745,

     'returningFlightNo' : 'AC979',
     'departLocationR' : 'Hong Kong',
     'arriveLocationR' : 'Vanvouer',
     'arrivelTimeR': 1025

   },
    {'Flight': 'DL4849',
     'leaving': 1010,
     'returning': 1030,
     'price': 1900,
     'Air_line': 'Delta Air Lines',
     'image': 'Delta.png',

     'leavingFlightNo': 'AC999',
     'departLocationL' : 'Vanvouer',
     'arriveLocationL' : 'Hong Kong',
     'arrivelTimeL': 1745,

     'returningFlightNo' : 'AC979',
     'departLocationR' : 'Hong Kong',
     'arriveLocationR' : 'Vanvouer',
     'arrivelTimeR': 1025
   },
   {'Flight': 'WS3255',
     'leaving': 1010,
     'returning': 1030,
     'price': 2100,
     'Air_line': 'WestJet',
     'image': 'WestJet.png',

     'leavingFlightNo': 'AC999',
     'departLocationL' : 'Vanvouer',
     'arriveLocationL' : 'Hong Kong',
     'arrivelTimeL': 1745,

     'returningFlightNo' : 'AC979',
     'departLocationR' : 'Hong Kong',
     'arriveLocationR' : 'Vanvouer',
     'arrivelTimeR': 1025
   },
    {'Flight': 'CX838',
     'leaving': 1940,
     'returning': 1030,
     'snippet': 'The Next, Next Generation tablet.',
     'price': 2800,
     'Air_line': 'Cathay Pacific Airways',
     'image': 'CathayPacific.png',

     'leavingFlightNo': 'AC999',
     'departLocationL' : 'Vanvouer',
     'arriveLocationL' : 'Hong Kong',
     'arrivelTimeL': 1745,

     'returningFlightNo' : 'AC979',
     'departLocationR' : 'Hong Kong',
     'arriveLocationR' : 'Vanvouer',
     'arrivelTimeR': 1025
   }
  ];

  $scope.orderProp = 'Air_line';
  $scope.orderProp = 'leaving';
  $scope.orderProp = 'price';
  $scope.oneAtATime = true;

    $scope.groups = [
    {
      title: 'Dynamic Group Header - 1',
      content: 'Dynamic Group Body - 1'
    },
    {
      title: 'Dynamic Group Header - 2',
      content: 'Dynamic Group Body - 2'
    }
  ];

  $scope.status = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
});

angular.module('ngSwipeRight', ['ngTouch']);

