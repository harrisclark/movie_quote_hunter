/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
        /**
    * Display phrase on game board
    */
    addPhraseToDisplay() {
        const ulPhrase = document.getElementById('phrase').firstElementChild;
        const phraseLetters = Array.from(this.phrase);
        
        phraseLetters.forEach(letter => {
            const li = document.createElement('li');
            li.innerHTML = letter;
            if (letter !== ' ') {
                li.className = `hide letter ${letter}`;
                ulPhrase.appendChild(li);
            } else {
                li.className = 'space';
                ulPhrase.appendChild(li);
            }
        })
    };
}