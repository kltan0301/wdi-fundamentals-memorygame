var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

function createBoard(){

	var board = document.getElementById('game-board'); 
	
	for(var i = 0; i < cards.length; i++){
		var card = document.createElement('div');
		card.setAttribute("class", "card"); 
		card.setAttribute('data-card', cards[i]);
		card.addEventListener('click', isTwoCards);

		board.appendChild(card);
	}
}
createBoard();

function isTwoCards(){
	var cardImage = this.getAttribute('data-card');
	cardsInPlay.push(cardImage);

	if(cardImage === "king"){
		this.innerHTML = '<img src="king.png" alt="King of Clubs" />';	
	}else{
		this.innerHTML = '<img src="queen.png" alt="Queen of Hearts" />';	
	}
	
	if(cardsInPlay.length === 2){
		
		isMatch(cardsInPlay);

		cardsInPlay = [];
	}
}

function isMatch(cardsInPlay){

	if(cardsInPlay[0] === cardsInPlay[1]){
		alert("Awesome it matches!");
	}else{
		alert("Sorry, try again!");
	}


	var cards = document.getElementsByClassName("card");

	for(var i = 0; i < cards.length; i++){
		cards[i].innerHTML = '';
	}
}