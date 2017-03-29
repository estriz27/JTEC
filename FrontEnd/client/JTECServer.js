//	add this line to html file to import parse <script src="https://npmcdn.com/parse/dist/parse.min.js"></script>
		Parse.initialize("a3Vzn4zfnMObdOfhNJJEdhiFaAdG62rz1Z8ictHmG");
		Parse.serverURL = 'http://jtec-dev.us-east-1.elasticbeanstalk.com/parse'
		var EyeData = Parse.Object.extend("EyeData")


		function initializeUser(){
			if (Parse.User.current() != null){
				Parse.User.logOut();
			}
			var user = new Parse.User();
			username = makeid();
			user.set("username", username);
			user.set("password", "1")


			user.signUp(null, {
			  success: function(user) {
			    // Hooray! Let them use the app now.
			  },
			  error: function(user, error) {
			    // Show the error message somewhere and let the user try again.
			    alert("Error: " + error.code + " " + error.message);
			  }
			});

		}


		function makeid(){
		    var text = "";
		    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

		    for( var i=0; i < 10; i++ )
		        text += possible.charAt(Math.floor(Math.random() * possible.length));

		    return text;
		}

		function pushData(x_array,y_array,timestamp_array, screen_size, valid, valid_percent){
			var newSet = new EyeData();
			var x_array = x_array || [];
			var y_array = y_array || [];
			var timestamp_array = timestamp_array || ["Timestamp Did Not Successfully Get Pushed"];
			var screen_size = screen_size || [];
			var valid = valid || null;
			var valid_percent = valid_percent || null;

			newSet.set("user",Parse.User.current());
			newSet.set("x_array",x_array);
			newSet.set("y_array",y_array);
			newSet.set("timestamp_array",timestamp_array);
			newSet.set("screen_size", screen_size);
			newSet.set("valid", valid);
			newSet.set("valid_percent", valid_percent);


			newSet.save(null, {
				success: function(newSet) {
				    // Execute any logic that should take place after the object is saved.
			//	  alert('New object created with objectId: ' + newSet.id);
				},
			    error: function(newSet, error) {
				    // Execute any logic that should take place if the save fails.
				    // error is a Parse.Error with an error code and message.
				alert('Failed to create new object, with error code: ' + error.message);
				}
				});
		}

		function logOut(){
			Parse.User.logOut();
		}

		function randomValue(){
			return Math.floor((Math.random() * 1000) + 1);
		}

		//Test Code

		initializeUser();

		for (i = 0; i < 100; i++){
		var my_x_array = []
		var my_y_array = []

		for (x = 0; x < 100; x++){
			my_x_array.push(randomValue());
			my_y_array.push(randomValue())
		}


		var date = new Date();
		var my_timestamp_array = [date,date,date,date,date];
		var screen_size = [10,10];
		var valid = true;
		var valid_percent = 75;

		pushData(my_x_array,my_y_array,my_timestamp_array, screen_size, valid, valid_percent);
		}

		logOut();