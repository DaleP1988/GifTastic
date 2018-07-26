

//one tree hill
//the oc
//felicity
//party of five
//freaks and geeks
//buffy the vampire slayer
//7th Heaven
//Roswell
//My So Called Life
//

      
var topics = ["Gilmore Girls", "One Tree Hill", "The O.C."];

// Constructing a URL to search Giphy for the name of the person who said the quote
var queryURLPrefix = "https://api.giphy.com/v1/gifs/search?q=" ;
var queryURLSuffix =  "&api_key=hCIPnDDgr1lypssStOzyyS7SUV5QHnkI" + "&limit=10" ;
var topicData = [];
//create these to build


for (var i = 0; i < topics.length; i++) { 
  var topic = { 
      name: topics[i],
      images: []
    };
    topicData.push(topic);
  fetchImages (topic, i);
  
}

function fetchImages(topic, index) {    //this is a new variable being created
  var topicParam = topic.name.toLowerCase().split(" ").join("+"); //standard for API queries
  var queryURL = queryURLPrefix + topicParam + queryURLSuffix;
  $.ajax({
      url: queryURL,
      method: "GET"
  }).then(function(response) {
    // Storing an array of results in the results variable. //SET TO VAR images, only need to declare once
    var pics;
    
    pics = response.data;
    

    var button = $("<button>").text(topicName).data("index", index);//.dat
      $("#buttons").append(button);
    
        
    // Looping over every result item.
    for (var i = 0; i < pics.length; i++) {

      var imageData = {
        stillImage: pics[i].images.original_still.url,
        animatedImage: pics[i].images.original.url,
        rating: pics[i].rating,
        topicName: topicName
      };
      topic.images.push(imageData);
      

      //NEXT FUNCTION: check these class activities: 6.3.13 button triggered AJAX, 6.3.15 dynamic elements 
      //at the on click to get the index, 
      //look up topic data at the index
      //iterate over images and create image elements on the page, 
      //add on click for each image 
      //all of this is in the same function
      // images will go the gifs id

      function newButtons(topic, index){
        $("#buttons").click(function(){
          for (var i = 0; i < topic.length; i++) {

          var showDiv = $("<div>");
          var p = $("<p>").text("Rating:" + topic[i].rating);
          var showImage = $("<img>");
          showImage.attr("src", topic[i].stillImage);
          showDiv.append(p);
          showDiv.append(showImage);
          $("gifs").prepend(showDiv);

        };

        newButtons();

        //NEXT FUNCTION: animate images when clicked; see Pausing Gifs Activity

      function animateButton(topic, index){
        $("#gifs").on("click",function(){
          for (var i = 0; i < topic.length; i++) {

            var state = $(this).attr(imageData);
            console.log(state);
            if (state === stillImage) {
              $(this).attr("src", $(this).attr(animatedImage));
              $(this).attr(imageData,animatedImage);
            } else {
              $(this).attr("src", $(this).attr(stillImage));
              $(this).attr(imageData, stillImage);


            }

        }


        )};

      animateButton();

    //FUNCTION:
        //take user input
        //append to array
        //make buttons 
        //new button functionality -based on the loop

      function formNewButtons(){
        var newButton = $("show-input").val().toLowerCase().split(" ").join("+");
        fetchImages(newButton);
        newButtons(newButton);
        animateButton(newButton);

      }

      
//NEXT FUNCTION: start the gif 6.3.15 -




// NEXT FUNCTION:
//take user input
//append to array
//make buttons 
//new button functionality -based on the loop




            };

         )};
       


      }




              // Only taking action if the photo has an appropriate rating
              // if (topics[i].rating !== "r" && topics[i].rating !== "pg-13") {
                // Creating a div with the class "item"
        //         var gifDiv = $("<div class='item'>");

        //         // Storing the result item's rating
        //         var rating = topics[i].rating;

        //         // Creating a paragraph tag with the result item's rating
        //         var p = $("<p>").text("Rating: " + rating);



    

      

    //
   
        
     