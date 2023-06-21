function sortOrNot(numberA, numberB, numberC) {
    numberA = Math.round(numberA);
    numberB = Math.round(numberB);
    numberC = Math.round(numberC);

    if (/^-?\d+$/.test(numberA) === false || /^-?\d+$/.test(numberB) === false || /^-?\d+$/.test(numberC) === false) {
        console.log("Error: please add numbers");
    } else {
        if (numberA === numberB || numberA === numberC || numberB === numberC) {
            console.log("Error: please ad differents numbers");
        } else {
            if (numberA < numberB & numberB < numberC) {
                console.log("Sorted !");
            } else {
                console.log("Not Sorted! ");
            }
        }
    }
}
sortOrNot(process.argv[2], process.argv[3], process.argv[4]);