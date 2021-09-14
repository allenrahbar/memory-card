// Variables for game

const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard, secondCard;

// Flip card function help with code from https://www.w3schools.com/jsref/prop_element_classlist.asp
// Function for matching cards

function flipCard() {
    this.classList.add('flip');

    if(!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
    }
}

cards.forEach(card => card.addEventListener('click', flipCard));



