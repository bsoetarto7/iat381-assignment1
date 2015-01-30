flightinfoApp.controller('flightDetailedController', function ($scope) {
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