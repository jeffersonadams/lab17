var app = angular.module('myModule');

console.log('directive successful')

app.directive('redditPost', function() {
  return {
    replace: false,
    restrict: 'E',
    templateUrl: 'partials/post.html'
  }
})
