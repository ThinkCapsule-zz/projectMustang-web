'use strict';

/** Created by ThinkCapsule Web Team
	
	=> Controls components on each web page using angularjs directives for modular components.

	- Michael Ding

*/

angular.module('kapacinoApp.directives', [])
	.directive("navbar", function(){
		return {
			restrict: "E",
			replace: true,
			transclude: true,
			templateUrl: "./components/ng-directives/navbar.html"
		}
	});