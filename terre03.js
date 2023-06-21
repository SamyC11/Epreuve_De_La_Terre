/* Variables declaration*/

const alphabet = "abcdefghijklmnopqrstuvwxyz";
let letterIndex = alphabet.indexOf(process.argv[2].toLowerCase());
let finalArray = [];

/*Extracion of the array's element to a final array */

for (let i = letterIndex; i < alphabet.length; i++) {
    let letter = alphabet[i];
    finalArray.push(letter);

}
console.log(`${finalArray.join('')}\n `);