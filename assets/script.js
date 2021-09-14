// Variables for game

const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard= false;
let firstCard, secondCard;

// Flip card function help with code from https://www.w3schools.com/jsref/prop_element_classlist.asp
// Function for matching cards

function flipCard() {
    if (lockBoard) return;
    this.classList.add('flip');

    if(!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }
    secondCard = this;
    hasFlippedCard = false;
    checkForMatch();
}

function checkForMatch () {
    if (firstCard.dataset.animals === secondCard.dataset.animals) {
        disableCards()
        return;
    }
    
function disableCards () {
    firstCard.removeEventListener ('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
}
function unflipCards () {
    lockBoard = true;

// code taken from https://www.w3schools.com/jsref/met_win_settimeout.asp

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        lockBoard= false;
    }, 1500);
}


cards.forEach(card => card.addEventListener('click', flipCard));



