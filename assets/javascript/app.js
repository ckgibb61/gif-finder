var topics = ["Leslie Knope", "Andy Dwyer", "Ron Swanson", "Andy Dwyer"];

$(document).ready(function () {
 console.log("ready");


 for (var i = 0; i < topics.length; i++) {
   console.log(topics[i]);
   var Btn = $("<button>").text(topics[i]);
   Btn.attr("id", "btn")
//    Btn.attr("search", topics[i])
   $("#buttons").append(Btn);
 };


 $("#buttons").on("click", function () {
   console.log("click")
   var character = $(this).text();
   var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=c556iUpaeO6MaqfvC272iCg8GqrElGfo&q=" + character + "&limit=25&offset=0&rating=G&lang=en";
   $.ajax({
     url: queryURL,
     method: "GET"
   }).then(function (response) {
     var results = response.data;
     console.log(response);

     for (var i = 0; i < results.length; i++) {
       var gifAppear = $("#appear");

       var rating = results[i].rating;

       var p = $("<p>").text("Rating: " + rating);

       var characterImage = $("<img>");
       characterImage.attr("src", results[i].images.fixed_height.url);

       gifAppear.prepend(p);
       gifAppear.prepend(characterImage);

       $("#appear").append(gifAppear);
       $("#appear").append(rating);
     };
    


    //  $("#appear").on("click", function () {
    //     var gif = $(this).attr(src);
    //     $gif.attr("src", imgAlt).attr("data-altImage", imgSrc);
	// 	$gif.parent().toggleClass("play"
       
    //  });
   });
 });
 
});