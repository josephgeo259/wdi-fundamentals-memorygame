
var cards = [
{
	"rank": 'queen',
	"suit": 'hearts',
	"cardImage": "images/queen-of-hearts.png"
},
{
	"rank": 'queen',
	"suit": 'diamonds',
	"cardImage":"images/queen-of-diamonds.png"

},{
	"rank": 'king',
	"suit": 'hearts',
	"cardImage": "images/king-of-hearts.png"
},{
	"rank": 'king',
	"suit": 'diamonds',
	"cardImage":"images/king-of-diamonds.png"
}];


var cardsInPlay=[]
function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
	
	console.log("You found a match!");
} 
	console.log("Sorry, try again.");
}


function flipCard(){
var cardId = this.getAttribute("data-id");
	var card = cards[cardId];
	console.log("Up and running!");
	var cardOne = "queen";
	var cardTwo = "queen";
	var cardThree = "king";

	alert("you found a match")
	var cardOne = cards[0];

	cardsInPlay.push(cards[cardId].suit)
	console.log("User flipped " + cardOne);
	var cardTwo = cards[2];
	cardsInPlay.push(cards[cardId].suit)
	console.log("User flipped " + cardTwo);
	console.log("User flipped " + cards[cardId].rank)


	console.log("User flipped " + cards[cardId].cardImage)
	console.log("User flipped " + cards[cardId].cardImage)

	if (cardsInPlay.legnth === 2) {

		if (cardsInPlay[0]===cardsInPlay[1]) {
			alert("You found a match!");
		}else{
			alert("Sorry, try again.");
		}
	}
	checkForMatch()
}

function createBoard(){
var cardElement = document.createElement("img");
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute("data-id", i)
		cardElement.addEventListener("click", flipCard);
		var board = document.getElementById("game-board");
		board.appendChild(cardElement);


}


	///console.log(cardsInPlay.legnth)
