// Initialize Firebase



// Email input field 


// When users click "submit"
    $(document.body).on("click", "#submit", function(event) {

    	console.log("submit was clicked");

      event.preventDefault();

      // Grab the user input
      var email = $("#userEmail").val().trim();

      console.log(email);

      // Clear absolutely everything stored in localStorage using localStorage.clear()
      localStorage.clear();

      // Store the username into localStorage using "localStorage.setItem"
      localStorage.setItem("email", email);

      // This line prevents the page from refreshing when a user hits "enter".
      // return false;
    });


// Mood Buttons




// Mood audio and image Div 




// Images Div




