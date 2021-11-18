/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//temporary code for testing

// const phrase = new Phrase();
// const game = new Game();

// const phrase = new Phrase('Life is like a box of chocolates');
// console.log(`Phrase - phrase: ${phrase.phrase}`);

// const game = new Game();
// game.phrases.forEach((phrase, index) => {
// console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
// });

// const game = new Game();
// game.getRandomPhrase().addPhraseToDisplay();

// const game = new Game();
// game.startGame();
// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);

let game;
const resetBtn = document.getElementById('btn__reset');

resetBtn.addEventListener('click', () => {
    game = new Game();
    game.startGame();
});


const qwerty = document.getElementById('qwerty');
qwerty.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        //console.log(e.target.textContent)
        game.handleInteraction(e.target.textContent)
    }
});

