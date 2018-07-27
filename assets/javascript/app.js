

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

$("#addShow").click(function(){
  onAddShowClicked();
});
for (var i = 0; i < topics.length; i++) { 
  createNewTopicButton(topics[i]); //review parameters  
 
}

function createNewTopicButton(topicName) {
  var topic = {
    name: topicName,
    images: []
  };
  topicData.push(topic);
  var i = topicData.length-1;
  fetchImages(topic, i);
  var button = $("<button>").text(topic.name).data("index", i);
  button.addClass("topicButton");
  $("#buttons").append(button);
  newImages(button, topic, i);
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
      
    // Looping over every result item.
    //could have made local variable with new name for topic.name. this is REFACTORING <<<<
    //webstorm has more editor options. good tool to use. 
    for (var i = 0; i < pics.length; i++) {

      var topicName = topic.name;   //let and var are mostly interchangeable. let is newer. const means does not change/fixed; if you set to 0 it will stay 0.
      var imageData = {
        stillImage: pics[i].images.original_still.url,
        animatedImage: pics[i].images.original.url,
        rating: pics[i].rating,
        topicName: topicName
      };
      topic.images.push(imageData);

    }
  
  });
}  

function newImages(button, topic, index){
  button.click(function(){  // needed to change this to class so these can be clicked individually
    $("#gifs").html("");
    topic.images.sort(function(image1, image2){     //can switch around if it sorts backwards
      return image2.rating.localeCompare(image1.rating);   //locale compare will use string comparison rules based on the current location language (and all punc.)
    });                                                   // <<<<<< play with the sort function. gives a function and gives two items at a time and determines whether to swap. 
    for (var i = 0; i < topic.images.length; i++) { //can do multiple "dots" for complex objects

      var showDiv = $("<div>");
      var p = $("<p>").text("Rating:" + topic.images[i].rating);
      var showImage = $("<img>");
      showImage.attr("src", topic.images[i].stillImage);
      showDiv.append(p);
      showDiv.append(showImage).addClass("topicImage");
      $("#gifs").prepend(showDiv);
      showImage.attr("currentImage", topic.images[i].stillImage); //be clear on contents of variable.
      animateButton(showImage, topic, i);

    }
   
  });
}
    //NEXT FUNCTION: animate images when clicked; see Pausing Gifs Activity
// with classes you can search all at once and do a function to all at once. id only works for one.
// with an id, you would have to use a unique id for each one.
function animateButton(image, topic, index){
  image.on("click",function(){
      var imageData = topic.images[index];
      var state = $(this).attr("currentImage");
      if (state === imageData.stillImage) {
        $(this).attr("src", imageData.animatedImage);
        $(this).attr("currentImage", imageData.animatedImage);
      } else {
        $(this).attr("src", imageData.stillImage); //review this on my own
        $(this).attr("currentImage", imageData.stillImage);
      }
  });
}

function onAddShowClicked(){
  var userChoiceInput = $("#show-input").val();
  createNewTopicButton(userChoiceInput);

}


//DEBUGGING
//index should be the new number
//append should add the new button to the div - ask the div for children, 
//check the elements tab of the debugger

    








  //NEXT FUNCTION: check these class activities: 6.3.13 button triggered AJAX, 6.3.15 dynamic elements 
      //at the on click to get the index, 
      //look up topic data at the index
      //iterate over images and create image elements on the page, 
      //add on click for each image 
      //all of this is in the same function
      // images will go the gifs id


       //FUNCTION:
        //take user input
        //append to array
        //make buttons 
        //new button functionality -based on the loop

      //NEXT FUNCTION: start the gif 6.3.15 -

// NEXT FUNCTION:
//take user input
//append to array
//make buttons 
//new button functionality -based on the loop



              // Only taking action if the photo has an appropriate rating
              // if (topics[i].rating !== "r" && topics[i].rating !== "pg-13") {
                // Creating a div with the class "item"
        //         var gifDiv = $("<div class='item'>");

        //         // Storing the result item's rating
        //         var rating = topics[i].rating;

        //         // Creating a paragraph tag with the result item's rating
        //         var p = $("<p>").text("Rating: " + rating);



    

      

    //
   
        
     