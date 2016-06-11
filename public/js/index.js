var app = angular.module('myApp', []);
app.controller('MainController', ['$scope', '$http', function($scope,$http) {
$scope.getIt=function(){
  var req = {
   method: 'POST',
   url: 'https://timestampingg.herokuapp.com/keywords',
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
