var app = angular.module('myModule');

app.config(function($routeProvider) {
  $routeProvider
    .when('/input', {
      controller: 'inputcontrol',
      templateUrl: 'partials/input.html'
    })
    .when('/output', {
      controller: 'outputcontrol',
      templateUrl: 'partials/output.html'
    })
    .otherwise({ redirectTo: '/input' });
});
