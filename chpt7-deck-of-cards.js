
/* Create a class for a standard deck of cards */

// Each card has a value and a suit property defined by the constructor
function Card(value, suit) {
  this.value = value;
  this.suit = suit;
}

function DeckOfCards() {
  // When a deck is created, a loop creates 52 cards from the value and suit arrays
  this.values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
  this.suits = ["Spade", "Heart", "Diamond", "Club"];
  this.deck = [];
  this.count = 0;
  // A modulus ensures that we stay in bounds and get an even distribution
  for (var i = 0; i < 52; i++) {
    this.deck.push(new Card(this.values[i % this.values.length], this.suits[i % this.suits.length]));
  }
}

DeckOfCards.prototype.shuffle = function() {
  
  var randIndex;
  var temp;
 
  for (var i = 0; i < this.deck.length; i++) {
    // We select a random index from indicies after the current element and swap
    randIndex = Math.floor(Math.random() * (this.deck.length - i)) + i;
    
    temp = this.deck[i];
    this.deck[i] = this.deck[randIndex];
    this.deck[randIndex] = temp;
  }

};

DeckOfCards.prototype.deal = function() {
  // Select 2 cards from the top of the deck
  var hand = new Array(this.deck[this.count++], this.deck[this.count++]);
  // If we get to the end of the deck, shuffle and reset
  if (this.count >= this.deck.length) {
    this.shuffle();
    this.count = 0;
  }  
  return hand;
};

DeckOfCards.prototype.score = function(hand) {

  var score = 0;
  var aces = 0;
  
  hand.forEach(function(card) {
    // If the card is a number, add it to the score, if it's an ace set aside, else it's a face card worth 10
    if (!isNaN(card.value)) {
      score += +card.value;
    } else if (card.value === "A") {
      aces++;                   
    } else {
      score += 10;
    }
  });
  
  while (aces > 0) {
    // Count aces as 11 if we can, otherwise assign them to 1
    score = score <= 10 && aces === 1 ? score + 11 : score + 1;
    aces--;
  }
  return score;
};