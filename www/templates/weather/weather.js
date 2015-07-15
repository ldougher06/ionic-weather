angular.module('won.weather', [])
  .controller('WeatherCtrl', function($scope, $stateParams, $ionicLoading, $http){
    $scope.city = $stateParams.city;
    $ionicLoading.show();
    $http
      .get('/api/forecast/' + $stateParams.lat + ',' + $stateParams.long)
      .success(function(data){
        console.log(data);
        $ionicLoading.hide();
      });
  });
