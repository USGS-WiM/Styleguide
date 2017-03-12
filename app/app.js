var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider

    .when('/', {
        templateUrl : '../views/home.html',
        controller  : 'homeController'
    })
    .when('/colors', {
        templateUrl : '../views/colors.html'
    })
    .when('/forms', {
        templateUrl : '../views/forms.html'
    })
    .when('/grid', {
        templateUrl : '../views/grid.html'
    })
    .when('/typography', {
        templateUrl : '../views/typography.html'
    })
    .when('/ui', {
        templateUrl : '../views/ui.html'
    })
    // .when('/other', {
    //     templateUrl : 'pages/other.html',
    //     controller  : 'otherController'
    // })
    .otherwise({
        redirectTo: "/"
    });

});

app.controller('homeController', function($scope) {

});
