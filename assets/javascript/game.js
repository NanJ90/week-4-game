
		var losses = 0;
		var wins = 0;
		var score = 0;
		$(document).ready(function() {
			randomGenerate();
		});

		$("img").on("click", function(event){
		var number = event.currentTarget.attributes[2].value;
		number = parseInt(number); 
		score += number;;
		var total = Math.floor(Math.random() * (120 - 19 + 1) + 19);
		$("textarea").html(score);
// set up wins and losses
			console.log("total:" + total, "score: " + score)
			if (total === score){
				randomGenerate();
				wins++;
				$(".wins").html(wins); 
			}
			if(total < score){
				randomGenerate();
				losses++;
				$(".losses").html(losses);
			}

			if(total > score){
				console.log("KEEP GOING YOU ARE FINE.")
			}

		});

	function randomGenerate (){
		console.log("hiii")
		var green = Math.floor(Math.random() * 12 + 1);
		var white = Math.floor(Math.random() * 12 + 1);
		var pink = Math.floor(Math.random() * 12 + 1);
		var blue = Math.floor(Math.random() * 12 + 1);
		score = 0;
		$("textarea").empty();

	// generate the random number 
		var total = Math.floor(Math.random() * (120 - 19 + 1) + 19);
		console.log( "it's" + total);
		$("#total").html(total);
		$(".green").attr("value",green);
		$(".white").attr("value",white);
		$(".pink").attr("value",pink);
		$(".blue").attr("value",blue);

	}

