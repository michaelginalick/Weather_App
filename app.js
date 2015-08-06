// MODULE
var weatherApp = angular.module("weatherApp", ['ngRoute', 'ngResource'])

//ROUTES
weatherApp.config(function ($routeProvider){
  
    $routeProvider
    .when('/', {
        controller: 'homeController',
        templateUrl: '/pages/home.htm'
        
    })
    
    .when('/forcast', {
        controller:  'forcastController',
        templateUrl: '/pages/forcast.htm'
        
    })
    
    .when('/forcast/:days', {
        controller:  'forcastController',
        templateUrl: '/pages/forcast.htm'
        
    })
    
});


//Services

weatherApp.service('cityService', function() {
    this.city = "Chicago, IL";
    
});



//controllers
weatherApp.controller('homeController', ['$scope', 'cityService', function($scope, cityService){
    $scope.city = cityService.city;
    $scope.$watch('city', function(){
        cityService.city = $scope.city;
    });
}]);

weatherApp.controller('forcastController', ['$scope', '$resource', '$routeParams', 'cityService', function($scope, $resource, $routeParams, cityService) {
    
    $scope.city = cityService.city;
    
    $scope.days = $routeParams.days || '2';
    
    $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", {callback: "JSON_CALLBACK" }, {get: {method: "JSONP" }});
    
    $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: $scope.days });
    
    $scope.convertToFarenheit = function(degk) {
        return Math.round((1.8 * (degk - 273)) + 32);
    }
    
    $scope.convertToDate = function(dt) {
      return new Date(dt * 1000)  
    };
    
}]);

