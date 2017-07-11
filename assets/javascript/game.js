//prepare HTML Page for JQuery
$(document).ready(function() {

	//Array of jewels
	var crystalsArray= ["#diamond", "#ruby", "#emerald", "#yellow"]
	//Var jewels will hold random numners for the crystals which will be pushed
	var wins = 0;
	var losses = 0;
	var score = 0;
	var jewels = [];
	function startGame() {
		jewels = [];
		score = 0;

		//Listen for event. Random number should populate to start the game. Random Math 
		//to generate the number.  Select nummber betwenn 19-120
		var random = Math.floor(Math.random() *101 +19);

		//Make computer generated random number appear on the document
		$("#randomNumber").text(random);

		//Make users score equal zero
		$("#score").text("Your score equals: " +score);
		//Make wins equal zero
		$("#wins").text("Wins " +wins);
		//Make losses equal zero
		$("#losses").text("Losses " +losses);
		//Run a for loop to generate random numbers for all of rhe crystals
		for (var i=0; i<crystalsArray.length; i++) {
			//generates the random number 1-12 to be pushed to the crystals
			var randomStone = Math.floor(Math.random() *11 +1);
			//Generate 4 random numbers and pushes it into jewels array
			jewels.push(randomStone);

		}
		//Creating click function for the 4 buttons.
		$("#images").on("click", ".rocks", function() {
			if ("diamond"===$(this).attr("id")) {
			//Increases user score every time they click on diamond by the number in empty array
				score = score + jewels[0];
			}
			else if ("ruby"===$(this).attr("id")) {
				score = score + jewels[1];
			}
			else if ("emerald"===$(this).attr("id")) {
				score = score + jewels[2];
			}
			else if ("yellow"===$(this).attr("id")) {
				score = score + jewels[3];
			}
			$("#score").text("Your score equals: " +score);
			//Win conditions - when user score equals the random number generated. User guess wns 
			//increases by 1
			if (score===random) {
				wins = wins +1;
				$("#wins").text("Wins " +wins);
				resetGame();
				//Reset random number
			}
			else if (score>random) {
				losses = losses +1;
				$("#losses").text("Losses" +losses);
				resetGame();
			}
		});
	}
	startGame();
	function resetGame() {
		score = 0;
		//unbinnd click event so doesn't hold the images bound.
		$('#images ').unbind('click');
		startGame();
	}

});