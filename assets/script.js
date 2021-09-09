// Select all cards and flip card function

const cards = document.querySelectorAll('.memory-card');

//* Flip card function help with code from https://www.w3schools.com/jsref/prop_element_classlist.asp

function flipCard() {
    this.classList.toggle('flip');
}

cards.forEach(card => card.addEventListener('click', flipCard));
