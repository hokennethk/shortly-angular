angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};

  $scope.addLink = function() {
    console.log("$scope.link", $scope.link);
    Links.addLink($scope.link)
      .then(function(link) {
        console.log(">>>>>>>>>LINK:",link);
        $scope.link.returnedLink=link;
        console.log(">>>>>>>>>Returned:",$scope.link.returnedLink);
      })
      .catch(function(err){
        console.log(">>>>>>>>>ERR:",err);
      });
    };
});
