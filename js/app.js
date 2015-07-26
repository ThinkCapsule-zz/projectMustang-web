var app = angular.module("loginApp", ["firebase"]);

app.controller("loginCtrl", function($scope, $firebaseObject) {
  	var ref = new Firebase("https://radiant-inferno-4979.firebaseio.com");

  	$scope.loginWithFacebook = function() {
 		ref.authWithOAuthPopup("facebook", function(error, authData) {
	  	if (error) {
	    	console.log("Login Failed!", error);
	    	alert("That didn't work");
		  } else {
		    console.log("Authenticated successfully with payload:", authData);
		    document.write("You're logged in!");
		  }
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
