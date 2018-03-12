
var cards = ["queen", "queen", "king",  "king"];
var cardsInPlay=[]

function flipCard(cardId){
	console.log("Up and running!");
	var cardOne = "queen";
	var cardTwo = "queen";
	var cardThree = "king";
	var cardFour = "king";
	console.log("User flipped " + cardOne);
	console.log("User flipped " + cardThree);
	alert("you found a match")
	var cardOne = cards[0];
	cardsInPlay.push(cardOne);
	console.log("User flipped " + cardOne);
	var cardTwo = cards[2];
	cardsInPlay.push(cardTwo);
	console.log("User flipped " + cardTwo);
	console.log(cardsInPlay.legnth)
	console.log("User flipped" + cards[cardId])
	if (cardsInPlay.legnth === 2) {
		if (cardsInPlay[0]===cardsInPlay[1]) {
			alert("You found a match!");
		}
		else{
			alert("Sorry, try again.");
		}
	}
}

flipCard(2)