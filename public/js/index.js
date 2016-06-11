var app = angular.module('myApp', []);
app.controller('MainController', ['$scope', '$http', function($scope,$http) {
$scope.getIt=function(){
  var req = {
   method: 'POST',
   url: 'http://localhost:3000/keywords',
   data: { date: $scope.keywords }
  }

  $http(req).then(
    function(res){
    $scope.tada=res.data;
  },
   function(res){
    console.log("error");
  });
};
}]);
