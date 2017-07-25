var app = angular.module('myModule');

app.controller('inputcontrol', function($scope, $location, factory) {
  $scope.searchSubReddit = function(subReddit) {
    factory.setJSON(subReddit).then(function() {
      $location.path('/output');
    });
    if (subReddit == 'goldenretrievers'){
      $('body').addClass('goldenretrievers');
    }
    // else if (subreddit != 'goldenretrievers'){
    //   $('body').removeClass('goldenretrievers');
    // }
  }
});
