var app = angular.module('myModule');

app.factory('factory', function($http) {

  var posts = [];

  return {
    setJSON: setJSON,
    getJSON: getJSON
  }
  function setJSON(subReddit) {

    var promise = $http({
      method: 'GET',
      url: 'https://www.reddit.com/r/' + subReddit + '.json'
    }).then(function successfulCallback(response) {
      console.log(response);
      posts = response.data.data.children;
      return posts;
    });
    return promise;
  }
  function getJSON() {
    return posts;
  }

});
