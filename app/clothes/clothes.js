angular.module('ClothingStore.clothes', ['ngRoute'])

.config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/clothes',{
			templateUrl: 'clothes/clothes.html',
			controller: 'ClothesCtrl'
		}).
		when('/clothes/:clothId',{
			templateUrl: 'clothes/clothes-details.html',
			controller: 'ClothDetailsCtrl'
		})
}])


.controller('ClothesCtrl', ['$scope', '$http', function($scope, $http){
	$http.get('json/clothes.json').success(function(data){
		$scope.clothes = data;
	});
}])

.controller('ClothDetailsCtrl', ['$scope', '$routeParams', '$http', '$filter' , function($scope, $routeParams, $http, $filter){
	var clothId = $routeParams.clothId;
		$http.get('json/clothes.json').success(function(data){
		$scope.cloth = $filter('filter')(data, function(d){
			return d.id == clothId;
		})[0];
		$scope.mainImage = $scope.cloth.images[0].name;
	});
		$scope.setImage = function(image){
			$scope.mainImage = image.name;
		}
}]);