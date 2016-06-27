angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $http, $ionicPopup) {

  $scope.weatherCity = function(cityName){
     console.log(cityName);
     $scope.cityName = 'delhi';
        var url='http://api.openweathermap.org/data/2.5/forecast/daily?q='+cityName+'&mode=json&units=metric&cnt=14&APPID=5a159066152d32363a0261ac875e1659';
        console.log(url);
          $http.get(url)
        .then(function(response) {
          $scope.weatherreport = response.data.list;
          console.log($scope.weatherreport);
      });
  }
  $scope.cityName= 'delhi';
   var url='http://api.openweathermap.org/data/2.5/forecast/daily?q='+$scope.cityName+'&mode=json&units=metric&cnt=7&APPID=5a159066152d32363a0261ac875e1659';
        console.log(url);
          $http.get(url)
        .then(function(response) {
          $scope.weatherreport = response.data.list;
          console.log($scope.weatherreport);
      });
  $scope.days= ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  $scope.dates=[];
  for(var i =0; i<14;i++){
     $scope.dates.push(new Date(Date.now()+(1000*86400*i)));
  }

    $scope.showDetails = function(index) {
      $scope.data = {}
      $scope.daily = index;
    console.log($scope.daily);
      // Custom popup
      $scope.myPopup = $ionicPopup.show({
          templateUrl: 'details.html',
          title: 'daily forecast',
          scope: $scope,
        });

      $scope.myPopup.then(function(res) {
         console.log('Tapped!', res);
      });    
   };
   $scope.closePopUp = function() {
      $scope.myPopup.close();
};


})

.controller('ChatsCtrl', function($scope, $http, $ionicPopup) {
  $scope.weatherCity = function(cityName){
         var url='http://api.openweathermap.org/data/2.5/forecast/daily?q='+cityName+'&mode=json&units=metric&cnt=7&APPID=5a159066152d32363a0261ac875e1659';
        console.log(url);
          $http.get(url)
        .then(function(response) {
          $scope.weatherreport = response.data.list;
          console.log($scope.weatherreport);
      });
  }
  $scope.cityName= 'delhi';
   var url='http://api.openweathermap.org/data/2.5/forecast/daily?q='+$scope.cityName+'&mode=json&units=metric&cnt=7&APPID=5a159066152d32363a0261ac875e1659';
        console.log(url);
          $http.get(url)
        .then(function(response) {
          $scope.weatherreport = response.data.list;
          console.log($scope.weatherreport);
      });

  $scope.days= ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  $scope.dates=[];
  for(var i =0; i<7;i++){
     $scope.dates.push(new Date(Date.now()+(1000*86400*i)));
  }

    $scope.showDetails = function(index) {
      $scope.data = {}
      $scope.daily = index;
    console.log($scope.daily);
      // Custom popup
      $scope.myPopup = $ionicPopup.show({
          templateUrl: 'details.html',
          title: 'daily forecast',
          scope: $scope,
        });

      $scope.myPopup.then(function(res) {
         console.log('Tapped!', res);
      });    
   };
   $scope.closePopUp = function() {
      $scope.myPopup.close();
};

})

.controller('AccountCtrl', function($scope, $http) {
  $scope.weatherCity = function(cityName){
        var url='http://api.openweathermap.org/data/2.5/forecast/daily?q='+cityName+'&mode=json&units=metric&cnt=1&APPID=5a159066152d32363a0261ac875e1659';
         $http.get(url)
        .then(function(response) {
          $scope.weatherreport = response.data.list;
          console.log($scope.weatherreport);
      });

  }
  $scope.cityName = 'delhi';
  var url='http://api.openweathermap.org/data/2.5/forecast/daily?q='+$scope.cityName+'&mode=json&units=metric&cnt=1&APPID=5a159066152d32363a0261ac875e1659';
         $http.get(url)
        .then(function(response) {
          $scope.weatherreport = response.data.list;
          console.log($scope.weatherreport);
      });
   $scope.date = new Date();

 });
