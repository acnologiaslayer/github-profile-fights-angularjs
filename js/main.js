const app = angular.module('testapp',['ngRoute']);
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '../views/profiles.html',
        controller: 'DataController'
    }).when('/fight', {
        templateUrl: '../views/fight.html',
        controller: 'DataController'

    }).otherwise({ redirectTo: '/' });
}]);