  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB6Ci3DroFdkgx-eOP-95QmDoGbqIH1-34",
    authDomain: "marvelous-marangs-project.firebaseapp.com",
    databaseURL: "https://marvelous-marangs-project.firebaseio.com",
    storageBucket: "marvelous-marangs-project.appspot.com",
    messagingSenderId: "897117282396"
    };

    firebase.initializeApp(config);

  // Create a variable to reference the database
  var database = firebase.database();

  // Email input field 
    // Click Button changes what is stored in firebase
    $("#submit").on("click", function() {

      // Get inputs
      email = $("#userEmail").val().trim();

      // Change what is saved in firebase
      database.ref().set({
        email: email,
      });

      // Prevent the page from refreshing
      return false;
    });

    // Firebase is always watching for changes to the data.
    // When changes occurs it will print them to console and html
    database.ref().on("value", function(snapshot) {

      // Print the initial data to the console.
      console.log(snapshot.val());

      // Log the value of the various properties
      console.log(snapshot.val().email);

      // If any errors are experienced, log them to console.
    }, function(errorObject) {
      console.log("The read failed: " + errorObject.code);
    });

// Mood Buttons




// Mood audio and image Div 




// Images Div




