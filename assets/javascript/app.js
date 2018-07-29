


$( document ).ready(function() {

  // TV Show Array. Will also house user input shows later.
  
  
  var shows = ["One Tree Hill", "The O.C.", "My So-Called Life", "Gilmore Girls", "Charmed", "Felicity", "Buffy the Vampire Slayer", "7th Heaven", "Gossip Girl", "Dawson's Creek","Friends", "Freaks and Geeks", "90210"];
  // ***********************************Functions & Methods***********************************************
  
  
  // FOR Buttons ***********************************************************************************************
  
  
  function presentGifButtons(){
      $("#gifButtonsDisplay").empty(); // CLEAR DIV, avoid duplicate results******************************************************
      for (var i = 0; i < shows.length; i++){
          var gifButton = $("<button>");
          gifButton.addClass("show");
          gifButton.addClass("btn btn-primary");
          gifButton.attr("data-name", shows[i]);
          gifButton.text(shows[i]);
          $("#gifButtonsDisplay").append(gifButton);
      }
  }
  // FOR ADD Show button **************************************************************************************************
  function addShowButton(){
      $("#addShow").on("click", function(){
      var show = $("#show-input").val().trim();
      if (show == ""){
        return false; // avoid making a blank button ******************************************
      }
      shows.push(show);
  
      presentGifButtons();
      return false;
      });
  }
  // FOR REMOVE show button ***************************************************************************************************
      
  function removeShowButton(){
      $("removeShow").on("click", function(){
      shows.pop(show);
      presentGifButtons();
      return false;
      });
  }
  // FOR DISPLAY shows ************************************************************************************************************
  function showAllGifs(){
      var show = $(this).attr("data-name");
      var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + show + "&api_key=dc6zaTOxFJmzC&limit=10";
      console.log(queryURL); // URL checkpoint
      $.ajax({
          url: queryURL,
          method: 'GET'
      })
      .done(function(response) {
          console.log(response); // data checkpoint
          $("#showView").empty(); // erase div content for new. 
          var results = response.data; //show results of gifs
          if (results == ""){
            alert("no gif for this one");
          }
          for (var i=0; i<results.length; i++){
  
              var gifDiv = $("<div>"); //make div for the gifs
              gifDiv.addClass("gifDiv");
              // access rating
              var gifRating = $("<p>").text("Rating: " + results[i].rating);
              gifDiv.append(gifRating);
              // connect to gif
              var gifImage = $("<img>");
              gifImage.attr("src", results[i].images.fixed_height_small_still.url); // still image stored at src
              gifImage.attr("data-still",results[i].images.fixed_height_small_still.url); // still image at data-still
              gifImage.attr("data-animate",results[i].images.fixed_height_small.url); // animated image at data-animate
              gifImage.attr("data-state", "still"); // set image state
              gifImage.addClass("image");
              gifDiv.append(gifImage);
              // pulling still image of gif
              // adding div of gifs to gifsView div
              $("#showView").prepend(gifDiv);
          }
      });
  }
  // CALLING THE FUNCTIONS******************************************************************************************************
  presentGifButtons(); // displays list of actions already created
  addShowButton();
  removeShowButton();
  
  // CHANGING IMAGE STATE with .on click function ************************
  $(document).on("click", ".show", showAllGifs);
  $(document).on("click", ".image", function(){
      var state = $(this).attr('data-state');
      if ( state == 'still'){
          $(this).attr('src', $(this).data('animate'));
          $(this).attr('data-state', 'animate');
      }else{
          $(this).attr('src', $(this).data('still'));
          $(this).attr('data-state', 'still');
      }
  });
  });