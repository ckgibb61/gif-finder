$(document).ready(function(){
    console.log("ready");
  
   var topics = ["Leslie Knope", "April Ludgate", "Ron Swanson", "Andy Dwyer"];


     for (var i = 0; i < topics.length; i++) {
        console.log(topics[i]);
        var Btn = $("<button>").text(topics[i]);
        // Btn.attr();
        // Btn.css({padding: 8px, color: blue});
        $("#buttons").append(Btn);
    };
    var character = $(this).attr("data-character");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + character + "api_key=c556iUpaeO6MaqfvC272iCg8GqrElGfo";
   
    $("#buttons").on('click', function(){
        console.log("click")
        $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        var results = response.data;
        console.log(response)

        for (var i = 0; i < results.length; i++) {
            var gifAppear = $("<div class='item'>");

            var rating = results[i].rating;

            var p = $("<p>").text("Rating: " + rating);

            var characterImage = $("<img>");
            characterImage.attr("src", results[i].images.fixed_height.url);

            gifAppear.prepend(p);
            gifAppear.prepend(characterImage);

            $("#appear").append(gifAppear);
        }

      });
    });


});
