/*** CONSTRUCTED BY THE THINKCAPSULE WEB TEAM 
	
	Created by Michael Ding, Ryan Medeiros and Esther Kim

	- loginCtrl = Handles the logic for Logging in users
	- SignUpCtrl = Handles the Logic for signing up new users

	Last modified : 08/28/2015

***/

/**
 * AngularJS Login Controller using Firebase API for authentication
 * @return {[Success/Error message]}  Success if authenticated, error otherwise
 */
app.controller("loginCtrl", function($scope, $firebaseAuth) {
  	var ref = new Firebase("https://radiant-inferno-4979.firebaseio.com");

  	var auth = $firebaseAuth(ref);

  	$scope.loginWithFacebook = function() {
		  auth.$authWithOAuthPopup("facebook").then(function(authData) {
		    console.log("Logged in as:", authData.uid);
		  }).catch(function(error) {
		    console.log("Authentication failed:", error);
		  });
	};

	$scope.loginWithGoogle = function() {
		var ref = new Firebase("https://radiant-inferno-4979.firebaseio.com");
			ref.authWithOAuthPopup("google", function(error, authData) {
	  		if (error) {
	    		console.log("Login Failed!", error);
	    		alert("That didn't work");
	  		} 
	  		else {
	    		console.log("Authenticated successfully with payload:", authData);
	    		document.write("You're logged in!");
	  		}
		});
	};

});