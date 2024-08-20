// function fibonacci(p){
//     let a = 0, b = 1, next;
//     console.log(a);
//     console.log(b);
//     for (let i = 0; i < p; i++) {
//         next = a + b;
//         console.log(next);
//         a = b;
//         b = next;
//     }   
// }
// const n = 10; 
// fibonacci(n);

const readline = require('readline');

// Generate a random number between 1 and 100
const targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
const maxAttempts = 15;

// Create an interface for reading input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to handle the guessing logic
function guessNumber(userGuess) {
    attempts++;
    if (userGuess < targetNumber) {
        console.log("Too low!");
    } else if (userGuess > targetNumber) {
        console.log("Too high!");
    } else {
        console.log("Congratulations! You guessed the number!");
        rl.close(); // Close the input stream
        return;
    }

    if (attempts < maxAttempts) {
        promptGuess();
    } else {
        console.log(`Sorry, you've used all ${maxAttempts} attempts. The number was ${targetNumber}.`);
        rl.close(); // Close the input stream
    }
}

// Prompt the user for their guess
function promptGuess() {
    rl.question("Guess a number between 1 and 100: ", (answer) => {
        const userGuess = Number(answer);
        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            console.log("Please enter a valid number between 1 and 100.");
            promptGuess(); // Ask again if the input is invalid
        } else {
            guessNumber(userGuess);
        }
    });
}

// Start the guessing process
promptGuess();
