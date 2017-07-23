window.addEventListener('load', function() { 

$(document).ready(function() {
var green = Math.floor(Math.random() * 12 + 1);
var white = Math.floor(Math.random() * 12 + 1);
var pink = Math.floor(Math.random() * 12 + 1);
var blue = Math.floor(Math.random() * 12 + 1);
var score = 0;
var losses = 0;
var wins = 0;

// generate the random number 
var total = Math.floor(Math.random() * (120-19+1) + 19);
		console.log( "it's" + total);
	$("#total").html(total);
	$(".green").attr("value",green);
	$(".white").attr("value",white);
	$(".pink").attr("value",pink);
	$(".blue").attr("value",blue);

// create "click" and add value to the score.
	$("img").on("click", function(event){
	var number = event.currentTarget.attributes[2].value;
	console.log("this is " + number);
	number = parseInt(number);
	score += number;
	console.log("hello", score);
	$("textarea").html(score);
// set up wins and losses
	if (total === score){
		wins++;
		$(".wins").html(wins);
	}

	else if(total < score){
		losses++;
		$(".losses").html(losses);
	}

	else{
		if(losses!==0){
			
		}
	}

	});
// function initializeGame(){
// 	var total
// 	var green = Math.floor(Math.random() * 12 + 1);
// 	var white = Math.floor(Math.random() * 12 + 1);
// 	var pink = Math.floor(Math.random() * 12 + 1);
// 	var blue = Math.floor(Math.random() * 12 + 1);
// 	var score = 0;
// }
		
		

	});

});
