flightinfoApp.controller('TypeaheadCtrl', function($scope, $http) {

  $scope.selected = undefined;
  $scope.states = ['YVR- Vancouver International Airport', 'HKG - Hong Kong International Airport', 'SEA - Seattle International Airport'];
  // Any function returning a promise object can be used to load values asynchronously
  $scope.getLocation = function(val) {
    return $http.get('http://maps.googleapis.com/maps/api/geocode/json', {
      params: {
        address: val,
        sensor: false
      }
    }).then(function(response){
      return response.data.results.map(function(item){
        return item.formatted_address;
      });
    });
  };
});