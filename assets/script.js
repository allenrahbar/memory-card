// Variables for game

const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard= false;
let firstCard,  secondCard;

// Flip card function help with code from https://www.w3schools.com/jsref/prop_element_classlist.asp
// Function for matching cards

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;
    this.classList.add('flip');

    if(!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }
    secondCard = this;
    lockBoard= true;
    checkForMatch();
}

function checkForMatch () {
     let isMatch = firstCard.dataset.animal === secondCard.dataset.animal;
    isMatch ? disableCards() : unflipCards();
    }
    
function disableCards () {
    firstCard.removeEventListener ('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
}
function unflipCards () {

// code taken from https://www.w3schools.com/jsref/met_win_settimeout.asp

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
    }, 1500);
}
// function for resetting board
function resetBoard () {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

// function for shuffling board
(function shuffle(){
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 16);
        card.style.order = randomPos;
    });
})();


cards.forEach(card => card.addEventListener('click', flipCard));



