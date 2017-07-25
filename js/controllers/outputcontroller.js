var app = angular.module('myModule');

app.controller('outputcontrol', function($scope, factory) {

  $scope.posts = factory.getJSON();

});
