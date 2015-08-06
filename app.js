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
    
});


//Services

weatherApp.service('cityService', function() {
    this.city = "New York, NY";
    
});



//controllers
weatherApp.controller('homeController', ['$scope', 'cityService', function($scope, cityService){
    $scope.city = cityService.city;
    $scope.$watch('city', function(){
        cityService.city = $scope.city;
    });
}]);

weatherApp.controller('forcastController', ['$scope', 'cityService', function($scope, cityService) {
    $scope.city = cityService.city;
    
}]);

