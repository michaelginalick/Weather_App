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