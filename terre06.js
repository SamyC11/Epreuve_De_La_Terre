function inversion(text) {
    if (text === "" || isNaN(text) === false || process.argv[3] !== undefined) {
        console.log("Error");
    } else {
        text = text.split("");
        let reverseText = [];
        for (let i = text.length - 1; i > -1; i--) {
            reverseText.push(text[i]);
        }
        console.log(reverseText.join(""));
    }
}
inversion(process.argv[2]);