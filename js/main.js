console.log("Up and running!");
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";
console.log("User flipped " + cardOne);
console.log("User flipped " + cardThree);
alert("you found a match")
var cards = ["queen", "queen", "king",  "king"];
var cardsInPlay=[]
var cardOne= cards[0]
cardsInPlay.push(cardOne)
console.log(cardOne)
console.log(cardsInPlay[0]  +" test1")
console.log("User flipped queen")

var cardTwo= cards[1]
cardsInPlay.push(cardTwo)

console.log(cardsInPlay[1] + " test")
console.log("User flipped king")
console.log(cardsInPlay.legnth)
if (cardsInPlay.legnth === 2) {
	if (cardsInPlay[0]===cardsInPlay[1]) {
      alert("You found a match!");
	}
	else{
alert("Sorry, try again.");
	}
}
