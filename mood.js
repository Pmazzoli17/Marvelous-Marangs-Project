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

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// var videos = [];

//       // displayVideo function renders the HTML to display the appropriate content
//       function displayVideo() {

//         var video = $(this).attr("data-name");
//         var queryURL = "https://www.googleapis.com/youtube/v3/search?part=angry&q=screamo%7Cmetal%7Cpunk%7Cdeathmetal+-emo+&safeSearch=none&key={AIzaSyBBEEEI-f9EGzUSAvYkAPB83lHwLGrs3wY}";

//     // Creating an AJAX call for the specific video -ML
//         $.ajax({
//           url: queryURL,
//           method: "GET"
//         }).done(function(response) {

//         })

        

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~          

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

    // This function handles events where a mood button is clicked -ML
        $("button").on("click", function() {
          var x = $(this).data("mood");
            console.log(x);

        var queryURL = "https://www.googleapis.com/youtube/v3/search?part=angry&q=screamo%7Cmetal%7Cpunk%7Cdeathmetal+-emo+&safeSearch=none&key={AIzaSyBBEEEI-f9EGzUSAvYkAPB83lHwLGrs3wY}";
   
        // Creating an AJAX call for the specific video -ML
        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
          console.log(response);
        });
      });




// Mood audio and image Div 




// Images Div




