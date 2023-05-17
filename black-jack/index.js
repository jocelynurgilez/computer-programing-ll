let userHand = [];
let dealerHand = [];
let sum = 0;
let dealerSum = 0;



function openInstructions() {
const modal = document.getElementById("myModal");
modal.style.display = "block";
}

function closeInstructions() {
const modal = document.getElementById("myModal");
modal.style.display = "none";
}


function hit() {

	// alert("Hit button pressed");
	// get a card - the computer will get you a random card
	let card5 = getcard();
	userHand.push(card5);
	// add it to users hand - you will add the sum that the user already has
	var usercard = document.getElementById("user-cards");
	var usersum= document.getElementById("user-sum");
	sum = sum +card5

	// alert("You got a" + " " + getcard())
	usercard.innerText = "These are your cards, " + userHand;
	usersum.innerText = "The sum of your cards is, " + (sum);
	// check for end condition - check if the sum is over 21 or exactly 21
	
	
	
	if(sum > 21){
		alert("You lose!")
		dealersum.innerText = "The dealers sum is, " + (dealerSum);
		var hitButton = document.getElementById("hit");
		hitButton.disabled = true ;
		var stayButton = document.getElementById("stay");
		stayButton.disabled = true ;
	}
}

function start() {

	sum = 0;
	dealersSum = 0;

	//reset variables
	dealerHand = [];
	userHand = [];

	//deal 2 cards to user
	let card1 = getcard();
	userHand.push(card1);
	
	let card3 = getcard();
	userHand.push(card3);
	

	//deal 2 cards to dealer
	let card2 = getcard();
	dealerHand.push(card2);
	
	let card4 = getcard();
	dealerHand.push(card4);

	dealerSum = card2 + card4;
	

	var usercard = document.getElementById("user-cards");
	var usersum= document.getElementById("user-sum");

	var dealercard = document.getElementById("dealer-cards");
	var dealersum= document.getElementById("dealer-sum");


	// rest ui cards
	sum = card1+card3;

	usercard.innerText = "These are your cards, " + userHand;
	usersum.innerText = "The sum of your cards is, " + (sum);
	dealersum.innerText = "The dealers sum is, ";


	dealercard.innerText = "These are the dealer cards, X" + " " + dealerHand[1];
	//update ui (ui is just the beginning)

	var hitButton = document.getElementById("hit");
	hitButton.disabled = false ;
	var stayButton = document.getElementById("stay");
	stayButton.disabled = false ;
} 





function stay() {
	var dealersum= document.getElementById("dealer-sum");

		var dealercard = document.getElementById("dealer-cards");
	while (dealerSum < 16){
		let dealercard= getcard();
		dealerHand.push(dealercard);

		dealerSum = dealerSum + dealercard;
		dealersum.innerText = "The sum of the dealer is, " + (dealerSum);

	}
	if (dealerSum > 21){
		alert("Dealer busted, you win!")
		dealersum.innerText = "The dealers sum is, " + (dealerSum);

		// rest ui cards
	}else if (dealerSum == sum){
		alert("You tied!");
		dealersum.innerText = "The dealers sum is, " + (dealerSum);
	} else if( dealerSum > sum){
		alert("Dealer wins!");
		dealersum.innerText = "The dealers sum is, " + (dealerSum);
	} else {
		alert("You win!");
		dealersum.innerText = "The dealers sum is, " + (dealerSum);
	}
	var hitButton = document.getElementById("hit");
	hitButton.disabled = true ;
	var stayButton = document.getElementById("stay");
	stayButton.disabled = true ;
	

	
	dealerSum.innerText = "The sum of your cards is, " + (dealerSum);


	dealercard.innerText = "These are the dealer cards, " + (dealerHand);

	




	// do nothing

	// dealer finishes drawing cards
	//check for incondition

} 

function getcard() {
	var minInt = 1;
	var maxInt = 10;
	var card = Math.floor(Math.random()*(maxInt-minInt+1)+minInt);
	//let x = Math.floor((Math.random() * 100) + 1);
	// alert("Random card drawn");
	return card;
	// draw a card at random and remove it from the "dec"
} 


