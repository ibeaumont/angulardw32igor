var amigosControllers = angular.module('amigosControllers', []);

amigosControllers.controller('amigosCtrl', ['$scope', 
  function($scope) {
    $scope.amigos = $scope.amigos=[
	{
		nombre:"juan",
		tlfno:"123456789"
	},
	{
		nombre:"pedro",
		tlfno:"123456789"
	},	
	{
		nombre:"luis",
		tlfno:"123456789"
	}
	];
  }]);
amigosControllers.controller('amigoEditCtrl', ['$scope', 
  function($scope) {
    $scope.amigo=
	{
		nombre:"juan",
		tlfno:"123456789"
	}
  }]);
