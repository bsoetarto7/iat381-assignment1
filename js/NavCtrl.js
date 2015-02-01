flightinfoApp.controller('NavCtrl', function ($scope) {
  $scope.NavBar = [
    {'name': 'Home',
     'LinkName': 'home',
 	  'arrow':' -> '},
    {'name': 'Flight Info',
     'LinkName': 'page2' ,
 	  'arrow':' -> '},
    {'name': 'Ticket Info',
     'LinkName': 'page3',
 	  'arrow':''}
  ];
});
