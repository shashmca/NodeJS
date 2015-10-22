angular.module('contactListApp', [])
	/*.config(["$routeProvider", function(routeProvider) {
		routeProvider.when('/', {
			templateUrl 	: '',
			controller 		: "AppCtrl"
		})
		.otherwise({rediectUrl: '/'}) 
	}])*/
    .controller('AppCtrl', ['$scope', '$http',
        function($scope, $http) {
            console.log("Hello World from console");

            $http.get('/contactlist').success(function(response) {
                console.log("I got the requested data");
                $scope.contactlist = response;
            });

            $scope.addContact = function() {
            	console.log("Inside function ", $scope.contact)
            	$http.post('/contactlist', $scope.contact)
            	.success(function(response) {
            		console.log(response);
            		$scope.contactlist.push(response);
            		$scope.contact = "";
            	});
            }
        }
    ]);
