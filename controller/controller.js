angular.module('cablingDiagram').controller('cablingDiagramController', ['$scope', '$timeout' , function($scope, $timeout) {
    $scope.portfolioArray = data;
    $scope.receiverArray = receiverData;
    $scope.urlFriendlyArray = shorts;
	$scope.checkboxes = [];
    $scope.connectionArray = getConnections($scope.portfolioArray);
    $scope.deviceArray = getDevices($scope.portfolioArray);
    $scope.urlParameters = getUrlParameter();

	$scope.$watch('optionSel',function(){
		$scope.a = getDropDownChange($scope.optionSel);
	});

	$scope.$watch('deviceArray', function(changed) {
            $scope.b = getCheckBoxClick($scope.urlFriendlyArray,changed)
        }, true);

	$scope.$watch('connectionArray', function(changed) {
            $scope.c = getCheckBoxClick($scope.urlFriendlyArray,changed)
        }, true);

	$(document).ready(function () {
		for (var m=0; m < $scope.receiverArray.length; m++)
		{
			if(typeof $scope.urlParameters[0][1] != 'undefined' && $scope.receiverArray[m].model == $scope.urlParameters[0][1])
				$scope.optionSel = $scope.receiverArray[m];
		}

		for(var v = 0 ; v < $scope.urlParameters.length; v++)
		{
			if(typeof $scope.urlParameters[v][1] != 'undefined')
				var position = $scope.urlParameters[v][1];

			if(typeof position != "undefined")
			{
      			position = position.toLowerCase();

				if(position in shorts)
					position = shorts[position];

				// devices
				for (var m = 0; m < $scope.deviceArray.length; m++)
				{
					if($scope.deviceArray[m].name.toLowerCase().replace(/^\s+|\s+$/g, '') == position)
						$scope.checkboxes.push($scope.deviceArray[m].name);
				}
				// connections			
				for (var m = 0; m < $scope.connectionArray.length; m++)
				{
					if($scope.connectionArray[m].name.toLowerCase().replace(/^\s+|\s+$/g, '') == position)
						$scope.checkboxes.push($scope.connectionArray[m].name);
				}
			}
		}
		// waits for angular digest to finish with dome and then applies checkboxes read from url (currently in global checkboxes array)
		$timeout(function() {
			for(var m=0; m < $scope.checkboxes.length; m++)
				$('input[name="'+$scope.checkboxes[m]+'"]').trigger('click');				
		});
	});

}]);