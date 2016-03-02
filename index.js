/*Pseudocode 

user types city into search box
user presses/submit update 
search looks through list of predetermined cities 
if term/city search is in data
city background for user changes
if term/city search is not in data
display error in search */



// user submits form
$('document').ready(function(){
	$('form').on('submit', function(e) {
        e.preventDefault();
        verifyUserInput();
    });
});

// fetch user inputed city, verify city name
function verifyUserInput(){
	var userInput = $('#city-type').val();

	if (userInput == 'New York' || userInput == 'New York City' || userInput == 'NYC') {
		$('body').addClass("nyc");
	} else if (userInput == 'San Francisco' || userInput == 'Bay Area' || userInput == 'SF') {
		$('body').addClass("sf");
	} else if (userInput == 'Los Angeles' || userInput == 'LA' || userInput === 'LAX'){
		$('body').css('background-image','url("images/la.jpg")');
	} else if (userInput == 'Austin' || userInput == 'ATX' || userInput === 'ATX'){
		$('body').css('background-image','url("images/austin.jpg")');
	} else if (userInput == 'Sydney' || userInput == 'SYD' || userInput === 'SYD'){
		$('body').css('background-image','url("images/sydney.jpg")');
	}
}

//console logging the string - four loop

var cities = ["nyc", "sf", "la", "atx", "syd" ]; 

for (var i = 0; i < cities.length; i++) {
	console.log(cities[i]);
}

$(".select").append();

<option val="cityname", + 'nyc' +>cityname</option>

//var = cityname

//$().val()

//option tag has 5 city names

//drop down

//add option into drop down

//for loop = inserts our options into the menu/for each entry it executes the code in the array
