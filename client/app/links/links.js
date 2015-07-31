angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  
  //set the object data
  $scope.data = {};

  //function that fetch link
  $scope.getLinks = function(){
  	//do something
  	Links.getLinks()
  	  .then(function(theLinks){
  		  $scope.data.links = theLinks;
    	});
  };

  $scope.getLinks();

});
