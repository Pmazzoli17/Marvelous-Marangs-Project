
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

      console.log("email value   " + snapshot.val().email);

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

        var queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=screamo%7Cpunk%7Cmetal&safeSearch=none&key=AIzaSyBBEEEI-f9EGzUSAvYkAPB83lHwLGrs3wY";
        // Creating an AJAX call for the specific video -ML
        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
          console.log(response);
        });
      });

// Getty Ajax Buttons

    // This function handles events where a mood button is clicked -ML
        $("button").on("click", function() {
          var x = $(this).data("mood");
            console.log(x);

        var queryURL = "https://api.gettyimages.com/v3/search/images?phrase=fish"
        // Creating an AJAX call for the specific video -ML
        $.ajax({
          url: queryURL,
          method: "GET",
          headers: {
            "Api-Key": "vtursd42ae565q3fnpsymhq5"
          }
        }).done(function(response) {
          console.log(response);
        });
      });


// The search URL for the anxious button. 
// GET https://www.googleapis.com/youtube/v3/search?part=snippet&channelType=any&eventType=completed&maxResults=20&order=relevance&q=relax%7Cmeditate%7Ccalm&safeSearch=none&type=video&videoCaption=any&videoDefinition=any&videoDimension=any&videoDuration=any&videoEmbeddable=true&videoLicense=any&videoSyndicated=any&videoType=any&key={YOUR_API_KEY}

$("#angry").click(function(){

	// Get mood button value
	var buttonResult = $(this).prop("value");

	// Log mood button value to console 
	console.log("You are feeling  " + $(this).prop("value"));
// });
	 
	
	// Write mood chosen into chosenMood div
	$("#chosenMood").html("Your current mood is  "+ buttonResult); 
});
    /**********************************************************/
    /* Once the mood is identified and saved, we need         */
    /* (1)query our music api for audio that matches the mood.*/ 
    /* (2)query our image api for images that match this      */
    /* mood                                                   */
    /**********************************************************/
 
  
 $("#anxious").click(function(){

 	// Get mood button value
	var buttonResult = $(this).prop("value");

	// Log mood button value to console 
	console.log("You are feeling  " + buttonResult);
	

	// Write mood chosen into chosenMood div
	$("#chosenMood").text("Your current mood is  "+ buttonResult);

	/**********************************************************/
    /* Once the mood is identified and saved, we need         */
    /* (1)query our music api for audio that matches the mood.*/ 
    /* (2)query our image api for images that match this      */
    /* mood                                                   */
    /**********************************************************/
  
 });			
		
$("#happy").click(function(){

	// Get mood button value
	var buttonResult = $(this).prop("value");

	// Log mood button value to console
	console.log("You are feeling  " + buttonResult);

	// Write mood chosen into chosenMood div
	$("#chosenMood").text("Your current mood is  "+ buttonResult);
	/**********************************************************/
    /* Once the mood is identified and saved, we need         */
    /* (1)query our music api for audio that matches the mood.*/ 
     // (2)query our image api for images that match this      
    /* mood                                                   */
    /**********************************************************/
  
 });	

$("#romantic").click(function(){

	// Get mood button value
	var buttonResult = $(this).prop("value");

	// Log mood button value to console
	console.log("You are feeling  " + buttonResult);
	
	// Write mood chosen into chosenMood div
	$("#chosenMood").text("Your current mood is  "+ buttonResult);
	/**********************************************************/
    /* Once the mood is identified and saved, we need         */
    /* (1)query our music api for audio that matches the mood.*/ 
    /* (2)query our image api for images that match this      */
    /* mood                                                   */
    /**********************************************************/
  
 });	

$("#sad").click(function(){

	// Get mood button value
	var buttonResult = $(this).prop("value");

	// Log mood button value to console
	console.log("You are feeling  " + buttonResult);
	
	// Write mood chosen into chosenMood div
	$("#chosenMood").text("Your current mood is  "+buttonResult);
    /**********************************************************/
    /* Once the mood is identified and saved, we need         */
    /* (1)query our music api for audio that matches the mood.*/ 
    /* (2)query our image api for images that match this      */
    /* mood                                                   */
    /**********************************************************/
 });




 
 // Mood audio and image Div 

 // Images Div


// Mood audio and image Div 




// Images Div





