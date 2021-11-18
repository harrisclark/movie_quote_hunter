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
        const lettersArray = Array.from(this.phrase);
        
        lettersArray.forEach(letter => {
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
    }

        /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */
    checkLetter(letter) {
        return this.phrase.includes(letter);
    }

        /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter) {
        const div = document.getElementById('phrase');
        const listItems = Array.from(div.getElementsByTagName('li'));
        listItems.forEach(li => {
            if (li.textContent === letter) {
                li.classList.replace('hide', 'show');
            }
        });
    };
}