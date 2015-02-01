flightinfoApp.controller('DropdownCtrl', ['$scope', function($scope) {
    $scope.Flexible = [
      {name:'1'},
      {name:'2'},
      {name:'3'},
      {name:'4'}
    ];
    $scope.myFlexible = $scope.Flexible[0]; 


    $scope.FlightClass=[
      {name:'Economy'},
      {name:'Business'},
      {name:'First Class'}
    ];
    $scope.myClass = $scope.FlightClass[0]; 

    $scope.FlightStop=[
      {name:'Non-Stop'},
      {name:'One-Stop'},
      {name:'Two-Stop'}
    ];
    $scope.myStop = $scope.FlightStop[0]; 


    
  }]);