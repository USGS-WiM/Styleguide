var app = angular.module('app', ['ngRoute', 'ngSanitize']);

app.config(function($routeProvider) {
    $routeProvider

    .when('/', {
        templateUrl : '../views/home.html',
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

app.controller('mainController', function($scope, $location, $anchorScroll, $routeParams) {
    $scope.scrollTo = function(id) {
        $location.hash(id);
        $anchorScroll();
    }
});