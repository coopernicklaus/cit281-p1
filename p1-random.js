/*
    CIT 281 Project 1
    Name: Cooper Christensen
*/

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// Generate an integer from 1-26
const length = getRandomInteger(5, 26);

// Create possible alphabet characters
let result = "";
const alphabet = "abcdefghijklmnopqrstuvwxyz";

// Loop through and return letters
for (let i = 0; i < length; i++) {
    const random_index = getRandomInteger(0, alphabet.length);
    result += alphabet[random_index];
}

console.log(`${length} lowercase letters: ${result}`);