/*** CONSTRUCTED BY THE THINKCAPSULE WEB TEAM 
	
	Created by Michael Ding, Ryan Medeiros and Esther Kim

	- Navbar = A navbar component based on Bootstrap styling with User profile

	Last modified : 08/28/2015

***/
app.directive("navbar", function(){
	return {
		restrict: "E",
		replace: true,
		transclude: true,
		templateUrl: "../components/navbar.html"
	}
});