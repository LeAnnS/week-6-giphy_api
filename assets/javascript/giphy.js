// Initial array of TV shows
var tvshows = ["The Mary Tyler Moore Show", "All in the Family", "Green Acres", "M*A*S*H", "The Bob Newhart Show", "Chico and the Man", "The Rockford Files", "Saturday Night Live", "Barney Miller", "WKRP in Cincinnati"]

// Function for displaying the buttons
function renderButtons() {

	// Loops through the array of TV shows
	for (var i=0; i < tvshows.length; i++) {

		// generate buttons for each tv show in the array
		var a = $("<button>");
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