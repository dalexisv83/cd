angular.module('cablingDiagram').controller('cablingDiagramController', ['$scope', '$timeout' , function($scope, $timeout) {
    $scope.portfolioArray = data;
    $scope.receiverArray = receiverData;
    $scope.connectionArray = getConnections($scope.portfolioArray);
    $scope.deviceArray = getDevices($scope.portfolioArray);

    // an object carrying a url friendly version of connection and device names ex: "audio receiver" --> "audio"
	var shorts = {
	"audio":"audio receiver",
	"composite":"composite/rca",
	"component":"component/rgb/yprpb",
	"digitalcoax":"digital coax audio",
	"digitalaudio":"digital audio (optical)"};

    var checkboxes = [];
    // gets the current url and tokenizes all key values in an array
    var getUrlParameter = function getUrlParameter() {
   	    var urlElements = [];
	    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
	        sURLVariables = sPageURL.split('&'),
	        sParameterName,
	        i;
	    for (i = 0; i < sURLVariables.length; i++) {
	        sParameterName = sURLVariables[i].split('=');

	        if (!(sParameterName[0] in urlElements)) {
	     		urlElements.push(sParameterName);
	        }
	    }
	    return urlElements;
	};

	// monitors and exchanges url elements happened to be in shorts object
	var urlFriendlyExchange = function urlFriendlyExchange(p){
		p = p.toLowerCase();
	    for( prop in shorts ) {
	          if( shorts[ prop ] === p )
	              return prop;
	    }
		return p;
	}

	// BUILDS URL
	// if a checkbox click event happens, this function will include its name in current url
	$scope.vm = {};
    $scope.vm.checkBoxClick = function($event) {
    	var newString = "";
		var oldUrl = window.location.href;
		var newUrl = "";

   		if($event.on){
   			if(oldUrl.indexOf($event.name.toLowerCase()) == -1){
   				var string = urlFriendlyExchange($event.name.toLowerCase());
   				newUrl = oldUrl + "&="+string;
   			}
   		}
   		else
   		{
			var string = urlFriendlyExchange($event.name.toLowerCase());
   			newUrl = oldUrl.replace("&="+string,'');
   		}
       	window.history.pushState("", "", newUrl);          
    };

    // BUILDS URL
    // if a selection is made from device dropdown this function will include its model name in current url
	$scope.vm.dropDownChange = function(){
		var newString = "";
		var oldUrl = window.location.href;
		var newUrl = "";
   		newString = "?rec="+$scope.receiverArray[$("#receiver_models option:selected").val()].model;


       	newUrl = oldUrl + newString;
       	window.history.pushState("", "", newUrl);
    }

	$(document).ready(function () {
		var urlParameters = getUrlParameter();

		for (var m=0; m < $scope.receiverArray.length; m++)
		{
			if(typeof urlParameters[0][1] != 'undefined' && $scope.receiverArray[m].model == urlParameters[0][1].toUpperCase())
				$scope.optionSel = $scope.receiverArray[m];
		}

		for(var v = 0 ; v < urlParameters.length; v++)
		{
			var position = urlParameters[v][1];

			if(typeof position != "undefined")
			{
      			position = position.toLowerCase();

				if(position in shorts)
					position = shorts[position];

				// devices
				for (var m = 0; m < $scope.deviceArray.length; m++)
				{
					if($scope.deviceArray[m].name.toLowerCase().replace(/^\s+|\s+$/g, '') == position)
						checkboxes.push($scope.deviceArray[m].name);
				}
				// connections			
				for (var m = 0; m < $scope.connectionArray.length; m++)
				{
					if($scope.connectionArray[m].name.toLowerCase().replace(/^\s+|\s+$/g, '') == position)
						checkboxes.push($scope.connectionArray[m].name);
				}
			}
		}
		// waits for angular digest to finish with dome and then applies checkboxes read from url (currently in global checkboxes array)
		$timeout(function() {
			for(var m=0; m < checkboxes.length; m++)
			{
				$('input[value="'+checkboxes[m]+'"]').trigger('click');				
			}
		});
	});

}]);