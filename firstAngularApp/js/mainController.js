app.controller('testController',function($scope,testFactory){
	$scope.information = testFactory.information;

	$scope.delRow = function(index){
    $scope.information.splice(index,1);
	}
	
})
