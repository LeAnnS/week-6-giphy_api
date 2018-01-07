// Initial array of TV shows
var tvshows = ["The Mary Tyler Moore Show", "All in the Family", "Green Acres", "M*A*S*H", "The Bob Newhart Show", "Chico and the Man", "The Rockford Files", "Saturday Night Live", "Barney Miller", "WKRP in Cincinnati"]

// Function for displaying the buttons
function renderButtons() {
	$("#buttons").empty();

	// Loops through the array of TV shows
	for (var i=0; i < tvshows.length; i++) {

		// generate buttons for each tv show in the array
		var a = $("<button class='btn btn-primary shows'>");
		// add a class of tvshow to the button
		a.addClass("tvshow");
		// add a data-atrribute
		a.attr("data-name", tvshows[i]);
		// provide button text
		a.text(tvshows[i]);
		// add the button to the buttons div
		$("#buttons").append(a);
	}
}

// call the renderButtons function to display the buttons
renderButtons();

// function to get value from input form
$("#input-button").on("click", function(event) {
	event.preventDefault();
	var input = $("#user-input").val();
	tvshows.push(input);
	renderButtons();
});



// define what happens when a button is clicked
// event listener for the buttons
$(document).on("click", ".shows", function() {
$("#gifs").empty();
var selection = $(this).attr("data-name");

	// this variable stores the giphy api url for the tvshow images
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + selection + "&api_key=s9Vvxq6drLmhtLtxkp7y6AxkY7SMAFGU&limit=10&offset=0&rating=PG&lang=en";
	
	// ajax GET request to the queryURL
	$.ajax({
	      url: queryURL,
	      method: "GET"
	    })

	// when the query is finished
	    .done(function(response) {
	    	console.log (response)

	    	// this variable holds the image data
	      	var results = response.data;

	      	// this loops through the results in the above variable
	      	for (var i = 0; i < results.length; i++) {
	        var gifDiv = $("<div class='item'>");

	        // this variable stores the gif rating
	        var rating = results[i].rating;

	       	// this creates a p tag to write the rating to the doc
	        var p = $("<p>").text("Rating: " + rating);

	        // this variable stores the gifs
	        var tvshowImage = $("<img>");
	        tvshowImage.attr("src", results[i].images.fixed_height.url);

	        gifDiv.prepend(p);
	        gifDiv.prepend(tvshowImage);

	        // adds the images to the gifs div
	        $("#gifs").prepend(gifDiv);
          	}
      	});
	});