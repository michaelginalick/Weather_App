//DIRECTIVES

weatherApp.directive("weatherReport", function() {
    return {
        restrict: 'E', 
        templateUrl: 'directives/weatherReport.html',
        replce: true,
        scope: {
            weatherDay: "=",
            convertToStandard: "&",
            convertToDate: "&",
            dateFormat: "@"
        }
    }
});