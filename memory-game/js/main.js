let cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];
let cardsInPlay = [];
let wins = 0;
let losses = 0;
let winCount = document.getElementById('wins');
let lossCount = document.getElementById('losses');

function checkForMatch() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
    wins += 1;
    updateScorecard();
  } else {
    alert("Sorry, try again.");
    losses +=1;
    updateScorecard();
  }
};
function flipCard() {
  let cardId = this.getAttribute('data-id');
  cardsInPlay.push(cards[cardId].rank);
  this.setAttribute('src', cards[cardId].cardImage);

  if (cardsInPlay.length === 2) {
    checkForMatch();
  }
};

function createBoard() {
  for (let i = 0; i < cards.length; i++) {
    let cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  }
};

function clearBoard() {
  document.getElementById('game-board').innerHTML = null;
}

function updateScorecard() {
  winCount.textContent = wins;
  lossCount.textContent = losses;
}

function resetGame(){
  clearBoard();
  createBoard();
  cardsInPlay = [];
}
let resetButton = document.getElementsByTagName('button')[0];
resetButton.addEventListener('click', resetGame);

createBoard();
