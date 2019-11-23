
const figure = require('./figures.js');
const chalk = require('chalk');
const readline = require('readline-sync');
const word = ["apple", "banana", "mango", "cherry"];

let currentword = word[Math.round(Math.random() * word.length - 1)];/*access the words inside word array 
                                                                and picks a random*/

let counter = 0;
let guessString = [];
let missedString = '';

// Initializing the empty String
function dashedString(word) {
    for (let i = 0; i < word.length; i++) {
        guessString[i] = '_';
    }
}


// This function display the hangman images
function displayfig(counter) {
    switch (counter) {
        case 1:
            console.log(figure.one());
            break;
        case 2:
            console.log(figure.two());
            break;
        case 3:
            console.log(figure.three());
            break;
        case 4:
            console.log(figure.four());
            break;
        case 5:
            console.log(figure.five());
            break;
        case 6:
            console.log(figure.six());
            break;
        case 7:
            console.log(figure.seven());
    }
}


// finiding & matching the letter
function find(letter) {
    let count = 0;
    for (i in currentword) {
        //console.log(currentword[i] +" "+ i);
        if (currentword[i] === letter) {
            displayfig(counter - 1);
            guessString[i] = letter;
        }
        else {
            count += 1;
        }
    }
    console.log(guessString.join(''));
    if (count === currentword.length) {
        return count;
    }
    else {
        count = 0;
        return count;
    }
}

function missed(missedcount, char) {
    if (missedcount > 0) {
        //console.log(`missed : ${char}`); 
        counter++;
        displayfig(counter);
        missedString = missedString + char + " ";
        console.log(guessString.join('') + "missed : " + missedString + "\n");
        missedcount = 0;
    }
    else {
        missedcount = 0;
    }
    return missedcount;
}


// This function starts the game 
function start() {
    dashedString(currentword);
    currentword.toLowerCase();

    console.log("Its Something we eat GUESS it");
    console.log(guessString.join(''));
    let i = 0;

    let maxGuesses = 6

    while (counter < maxGuesses && i < currentword.length + maxGuesses) {
        let count = 0;
        let char = '';


        if (guessString.includes('_') && counter < maxGuesses) {
            char = readline.question('Guess :');
            if (char.length == 1) {
                count = find(char);
                count = missed(count, char);

            }
            else {
                console.log('wrong input enter again');
                char = readline.question('Guess :');
                if (char.length == 1) {
                    count = find(char);
                    count = missed(count, char);
                }

            }
            //console.log(guessString);
        }

        i++;
    }
    //console.log(guessString.join('').toString());
    if (guessString.join('').toString() === currentword) {
        displayfig(7);
        console.log('You won');
    }
    else {
        console.log('You Lose');
    }
}
start();