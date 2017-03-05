/*var cardOne = "queen";
var cardTwo = "king";
var cardThree = "king";
var cardFour = "queen";*/
//Card one and Card four match queens, cards two and three are kings

var cards = ['queen', 'king', 'king', 'queen'];
var cardsInPlay = [];
var gameboard = document.getElementById('game-board');

/*function addElements () {
	var board = document.getElementById('game-board');
	for (var i = 0; i < 4; i++) {
	var card = document.createElement('div');
	card.className = 'card';
	card.setAttribute ('data-card', cards[i]);
	board.appendChild(card);
	card.addEventListener('click', isTwoCards)
}
} */

function addElements (){
	for (var i = 0; i < 4; i++){
		var card = document.createElement('div');
		card.setAttribute ('data-card', cards[i]); 
		card.className = 'card';
		card.addEventListener('click', isTwoCards);
		gameboard.appendChild(card);
	}	
};

//document.addEventListener('DOMContentLoaded',addElements,false); 



var isTwoCards = function () {
	cardsInPlay.push(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML ='<img src="kingofhearts.png" alt="King of Hearts" height=200px width=150px>';
	} else {
		this.innerHTML ='<img src="queenofhearts.png" alt="Queen of Hearts" height=200x width=150px>';
	} 
if (cardsInPlay.length === 2) {
isMatch(cardsInPlay);
cardsInPlay = [];
	}
};

var isMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("YOU MADE A MATCH HOORAY");
	} else if (cardsInPlay[0] !== cardsInPlay[1]) {
		alert("Unfortunately you did not make a match...");
	}
};

addElements();

/*if (cardOne===cardTwo) {
	alert("You found a match!")}
	else { alert("No Match!")}

if (cardOne===cardThree) {
	alert("You found a match!")}
	else { alert = "No Match!"}

if (cardOne===cardFour) {
	alert("You found a match!")}
	else { alert("No Match!")}

if (cardTwo===cardThree) {
	alert("You found a match!")}
	else { alert("No Match!")}

if (cardTwo===cardFour) {
	alert("You found a match!")}
	else { alert("No Match!")}

if (cardThree===cardFour) {
	alert("You found a match!")}
	else { alert("No Match!")}
	*/