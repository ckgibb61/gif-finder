$(document).ready(function(){
    console.log("ready");
  
   var topics = ["Leslie Knope", "April Ludgate", "Ron Swanson", "Andy Dwyer"];


     for (var i = 0; i < topics.length; i++) {
        console.log(topics[i]);
        var Btn = $("<button>").text(topics[i]);
        $("#buttons").append(Btn);
    };

    var character = $(this).attr("data-name");
   
    var queryURL = "http//api.giphy.com/v1/gifs/search?api_key=c556iUpaeO6MaqfvC272iCg8GqrElGfo&q=" + character + "&limit=10&offset0&rating=G&lang=en";


    $("#buttons").on('click', function(){
        console.log("click")
        $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        var results = response.data;
        console.log(response)

        for (var i = 0; i < results.length; i++) {
            var gifAppear = $("#appear");

            var rating = results[i].rating;

            var p = $("<p>").text("Rating: " + rating);

            var characterImage = $("<img>");
            characterImage.attr("src", results[i].images.fixed_height.url);
            characterImag.attr("src", results[i].images.fixed_width_still.url);
            characterImag.attr("data-still", results[i].images.fixed_width_still.url);
            characterImag.attr("data-move", results[i].images.fixed_width.url);
            characterImag.attr("data-state", "still");

            gifAppear.prepend(p);
            gifAppear.prepend(characterImage);

            $("#appear").append(gifAppear);
            $("#appear").append(rating);
        }

      });
    });


});
