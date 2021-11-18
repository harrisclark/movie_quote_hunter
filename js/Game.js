/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase('you shall not pass'),
            new Phrase('the dude abides'),
            new Phrase('all work and no play makes jack a dull boy'),
            new Phrase('i drink your milkshake'),
            new Phrase('zeds dead baby')
        ];

        this.activePhrase = null;
    }
        /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        const randomPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
        return randomPhrase;
    };
    
    startGame() {
        const div = document.getElementById('phrase');
        const ul = div.firstElementChild;
        
        while (ul.firstChild) {
        ul.firstChild.remove();
        }

        const qwerty = document.getElementById('qwerty');
        const button = qwerty.getElementsByTagName('BUTTON');
        for (let i = 0; i < button.length; i++) {
            button[i].className = 'key';
            button[i].disabled = false;
        }

        const scoreBoard = document.getElementById('scoreboard');
        const heartImages = scoreBoard.getElementsByTagName('img');
        this.missed = 0;
        for (let i = 0; i < heartImages.length; i++) {
            heartImages[i].src = "images/liveHeart.png";
        }


        const overlay = document.getElementById('overlay');
        overlay.style.display = 'none';
        
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

        /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */
    checkForWin() {
        const div = document.getElementById('phrase');
        const listItems = Array.from(div.getElementsByTagName('li'));
        let counter = 0;
        listItems.forEach(li => {
            if (li.classList.contains('hide')) {
                counter++;
            }
        });
        if (counter === 0) {
            return true;
        } else {
            return false;
        }
    }

        /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
        const scoreBoard = document.getElementById('scoreboard');
        const heartImages = scoreBoard.getElementsByTagName('img');
        this.missed++;
        for (let i = 0; i < heartImages.length; i++) {
            if (i < this.missed) {
                heartImages[i].src = "images/lostHeart.png";
            }
        }

            if (this.missed === heartImages.length) {
                this.gameOver();
            }
    };
        /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {
        const overlay = document.getElementById('overlay');
        overlay.style.display = '';
        const message = document.getElementById('game-over-message')
        if (gameWon) {
            overlay.className = 'win'; 
            message.innerHTML = 'Nice! You Won!';
        } else {
            overlay.className = 'lose';
            message.innerHTML = 'Better luck next time, loser'
        }
    };

    /**
     * Handles the game logic once user provides a letter
     * @param {string} letter - user input
     */
    handleInteraction(letter) {
        const qwerty = document.getElementById('qwerty');
        const button = qwerty.getElementsByTagName('button');
            
        if (this.activePhrase.checkLetter(letter)) {
           
            for (let i=0; i < button.length; i++) {
                if (button[i].textContent === letter) {
                    button[i].disabled = true;
                    button[i].classList.add('chosen');
                }
            }
    
            this.activePhrase.showMatchedLetter(letter);
            this.checkForWin();
            if (this.checkForWin()) {
                this.gameOver(true);
            }   
        } else {
    
            for (let i=0; i < button.length; i++) {
                if (button[i].textContent === letter) {
                    button[i].disabled = true;
                    button[i].classList.add('wrong');
                }
            }
    
            this.removeLife();
        }
    }
}