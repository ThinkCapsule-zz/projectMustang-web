/*** CONSTRUCTED BY THE THINKCAPSULE WEB TEAM 
	
	Created by Michael Ding, Ryan Medeiros and Esther Kim

	Handles the Routing using $routeProvider built into Angularjs

	Last modified : 08/28/2015

***/

app.config(function ($routeProvider) {
	$routeProvider
	.when('/', {
		controller: 'mainPageCtrl',
		templateUrl: 'index.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});