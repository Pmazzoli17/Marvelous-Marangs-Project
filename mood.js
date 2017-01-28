
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyB5mnXOmk-joFswh_H0tztREWkzOhRahOw",
    authDomain: "validation-67fa0.firebaseapp.com",
    databaseURL: "https://validation-67fa0.firebaseio.com",
    storageBucket: "validation-67fa0.appspot.com",
    messagingSenderId: "580480157286"
    };
    
    firebase.initializeApp(config);

    // Create a variable to reference the database
    var database = firebase.database();

    var email = "";

    // Capture Button Click
    $("#add-user").on("click", function() {
      // event.preventDefault();

    // Code for storing and retrieving the most recent email.

      email = $("#email-input").val().trim();

      database.ref().push({
        email: email,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
        })

      // $("#email-input").val(" ");
    })

    database.ref().on("child_added", function(snapshot) {
    $(".well").append("<p>"+snapshot.val().email+"</p>");
    $(".well").append("<hr>");
    })

    // Create Firebase "watcher" Hint: .on("value")
      firebase.database().ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {
    // Log everything that's coming out of snapshot
      console.log(snapshot.val());
      console.log(snapshot.val().email);

    // Change the HTML to reflect in the most recent area
      $("#email-display").html(snapshot.val().email);
    })

// Process Mood Buttons

    // This event handler processes click events from mood buttons -ML
    // It defines a set of youTube search queryURLs that will be selected based
    // on the value of the mood and subsequently used in the AJAX call to the
    // the youtube API 


        $("button").on("click", function() {
          var x = $(this).data("mood");

          // Debug code
          // console.log("x =   " + x);            

          // Define youTube API search strings for different moods 
          var queryURL1 = "https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=1&order=relevance&q=punk+music&key=AIzaSyBBEEEI-f9EGzUSAvYkAPB83lHwLGrs3wY";
          var queryURL2 = "https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=1&order=relevance&q=anxious+music&key=AIzaSyBBEEEI-f9EGzUSAvYkAPB83lHwLGrs3wY";
          var queryURL3 = "https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=1&order=relevance&q=happy+music&key=AIzaSyBBEEEI-f9EGzUSAvYkAPB83lHwLGrs3wY";
          var queryURL4 = "https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=1&order=relevance&q=Romantic+music&key=AIzaSyBBEEEI-f9EGzUSAvYkAPB83lHwLGrs3wY";
          var queryURL5 = "https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=1&order=relevance&q=Sad+music&key=AIzaSyBBEEEI-f9EGzUSAvYkAPB83lHwLGrs3wY";
          
        // These conditional statements set the queryURL string based on 
        // the type of mood that was selected by the user - ML

          if (x==="mad") {
            queryURL=queryURL1;
            } 
            else if (x==="stressed"){
              queryURL=queryURL2;
              }
            else if (x==="joyful") {
              queryURL=queryURL3;

              }
            else if (x==="love") {
              queryURL=queryURL4;
              }
            else {
              queryURL=queryURL5;
            }  
          
        // Creating an AJAX call to pull video info from youtube - ML
        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
          
        // obtain videoID for playback - ML
          videoID=response.items[0].id.videoId;
          console.log(x + " videoId =  " + videoID);
 
          $("#video-link").replaceWith('<iframe id="video-link" class="embed-responsive-item" src="https://www.youtube.com/embed/'+ videoID +'"></iframe>');
        });
        // Image ajax goes here

        console.log("just checking to see if I still have gooo value for x  " + x);
        var y = x;

        // Setting the queryURL for images API - ML 
          var angryimageQueryURL = "https://api.gettyimages.com/v3/search/images/creative?phrase=mad";
          var anxiousimageQueryURL = "https://api.gettyimages.com/v3/search/images/creative?phrase=upset";
          var happyimageQueryURL = "https://api.gettyimages.com/v3/search/images/creative?phrase=fun";
          var romanticimageQueryURL = "https://api.gettyimages.com/v3/search/images/creative?phrase=romantic";
          var sadimageQueryURL = "https://api.gettyimages.com/v3/search/images/creative?phrase=sad";

        // These conditional statements set the queryURL string for images based on 
        // the type of mood that was selected by the user - ML

          if (y==="mad") {
            iqueryURL=angryimageQueryURL;
            console.log("this is the mad URL " + queryURL);
            } 
            else if (y=="stressed"){
              iqueryURL=anxiousimageQueryURL;
              console.log("this is the stressed  URL " + queryURL);
              }
            else if (y==="joyful") {
              iqueryURL=happyimageQueryURL;
              console.log("this is the joyful  URL " + queryURL);
              }
            else if (y==="love") {
              iqueryURL=romanticimageQueryURL;
              console.log("this is the joyful  URL " + queryURL);
              }
            else {
              iqueryURL=sadimageQueryURL;
            }  

        var apiKey = 'j878g39yx378pa77djthzzpn';
        $.ajax({
          type:'GET',
          url: iqueryURL,
          beforeSend: function (request) {
              request.setRequestHeader("Api-Key", apiKey);
           }})
          .done(function(data){
              console.log("Success with data");
              console.log(data);
              var imageURL=data.images[0].display_sizes[0].uri;
              console.log("This is the image before append to page " + imageURL);

              var image = document.createElement("img");
              image.src = imageURL;
              //image.height or image.css
              console.log("This is the full image tag: " + image); 

          // Change this to write into second div
           //  $("#output").replaceWith("<img src='" + data.images[0].display_sizes[0].uri + "'/>");
             $("#output").empty(); 
             $("#output").append(image); 
             console.log("This is the image after append to page " + imageURL);
             console.log("got to image");
                      })

   .fail(function(data){

       alert(JSON.stringify(data,2))

   });
        // End of images ajax
      });

// Getty Ajax Buttons

    // This function handles events where a mood button is clicked -ML
        $("button").on("click", function() {
          var y = $(this).data("mood");

          // Debug code
          console.log("y =   " + y);    

        // Setting the queryURL for images API - ML 
          var angryimageQueryURL = "https://api.gettyimages.com/v3/search/images/creative?phrase=mad";
          var anxiousimageQueryURL = "https://api.gettyimages.com/v3/search/images/creative?phrase=upset";
          var happyimageQueryURL = "https://api.gettyimages.com/v3/search/images/creative?phrase=fun";
          var romanticimageQueryURL = "https://api.gettyimages.com/v3/search/images/creative?phrase=romantic";
          var sadimageQueryURL = "https://api.gettyimages.com/v3/search/images/creative?phrase=sad";

        // These conditional statements set the queryURL string for images based on 
        // the type of mood that was selected by the user - ML

          if (y==="mad") {
            queryURL=angryimageQueryURL;
            console.log("this is the mad URL " + queryURL);
            } 
            else if (y=="stressed"){
              queryURL=anxiousimageQueryURL;
              console.log("this is the stressed  URL " + queryURL);
              }
            else if (y==="joyful") {
              queryURL=happyimageQueryURL;
              console.log("this is the joyful  URL " + queryURL);
              }
            else if (y==="love") {
              queryURL=romanticimageQueryURL;
              console.log("this is the joyful  URL " + queryURL);
              }
            else {
              queryURL=sadimageQueryURL;
            }  

        // Creating an AJAX call for the specific image -ML
        $.ajax({
          url: queryURL,
          method: "GET",
          headers: {
            "Api-Key": "vtursd42ae565q3fnpsymhq5"
          }
        }).done(function(response) {

        // Debug code - ML
        console.log("this URL was used in ajax  " + queryURL);
       console.log(response);
        });
      });

// The search URL for the anxious button. 
// GET https://www.googleapis.com/youtube/v3/search?part=snippet&channelType=any&eventType=completed&maxResults=20&order=relevance&q=relax%7Cmeditate%7Ccalm&safeSearch=none&type=video&videoCaption=any&videoDefinition=any&videoDimension=any&videoDuration=any&videoEmbeddable=true&videoLicense=any&videoSyndicated=any&videoType=any&key={YOUR_API_KEY}

$("#angry").click(function(){

  // Get mood button value
  var buttonResult = $(this).prop("value");

  // Log mood button value to console 
  console.log("Your mood is  " + $(this).prop("value"));
// });
   
  
  // Write mood chosen into chosenMood div
  $("#chosenMood").html("Your mood is  "+ buttonResult + " check out the sounds & images we've chosen"); 
  
});
    
  
 $("#anxious").click(function(){

  // Get mood button value
  var buttonResult = $(this).prop("value");

  // Log mood button value to console 
  console.log("You are feeling  " + buttonResult);
  

  // Write mood chosen into chosenMood div
  $("#chosenMood").text("Your mood is  "+ buttonResult + " check out the sounds and images we've chosen");
    
 });      
    
$("#happy").click(function(){

  // Get mood button value
  var buttonResult = $(this).prop("value");

  // Log mood button value to console
  console.log("You are feeling  " + buttonResult);

  // Write mood chosen into chosenMood div
  $("#chosenMood").text("Your current mood is  "+ buttonResult + " check out the sounds and images we've chosen");
    
 });  

$("#romantic").click(function(){

  // Get mood button value
  var buttonResult = $(this).prop("value");

  // Log mood button value to console
  console.log("You are feeling  " + buttonResult);
  
  // Write mood chosen into chosenMood div
  $("#chosenMood").text("Your current mood is  "+ buttonResult + " check out the sounds and images we've chosen");
    
 });  

$("#sad").click(function(){

  // Get mood button value
  var buttonResult = $(this).prop("value");

  // Log mood button value to console
  console.log("You are feeling  " + buttonResult);
  
  // Write mood chosen into chosenMood div
  $("#chosenMood").text("Your current mood is  "+ buttonResult + " check out the sounds and images we've chosen");
    
 });
