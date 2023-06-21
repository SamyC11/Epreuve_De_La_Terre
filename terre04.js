/*Even verification function*/
function evenOrOdd(yourInput) {
    yourInput = Math.round(yourInput);
    if (isNaN(yourInput) === true || yourInput === "") {
        console.log("Please add a number");
    } else if (yourInput % 2 === 0 || yourInput % 2 === -0) {
        console.log("This is an even integer");
    } else {
        console.log("This is an odd integer");
    }
}
evenOrOdd(process.argv[2]);