var app = angular.module('myApp', []);
app.config(function( $locationProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

});
app.controller('SomeController', ['$scope', '$location','$window', function($scope, $location,$window) {
$scope.getIt=function(){
 var pathto="/"+$scope.keywords
$location.path(pathto);
$window.location.reload();
};
}]);
