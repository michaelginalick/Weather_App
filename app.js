// MODULE
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

//ROUTES
weatherApp.config(function($routeProvider){
  
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

//controllers
weatherApp.controller('homeController', ['$scope', function($scope){

}]);

weatherApp.controller('forcastController', ['$scope', function($scope) {


}]);