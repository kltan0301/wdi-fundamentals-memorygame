var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

if(cardOne == cardTwo){
	alert("You found a match!");
}else {
	alert("Sorry, try again.");
}

function createBoard(count){

	var board = document.getElementById('game-board'); 
	
	for(var i = 0; i < count; i++){
		var card = document.createElement('div');
		card.setAttribute("class", "card"); 
		board.appendChild(card);
	}
}
createBoard(4);