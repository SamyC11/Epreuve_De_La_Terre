function findSwiss(numberA, numberB, numberC) {
    numberA = Math.round(numberA);
    numberB = Math.round(numberB);
    numberC = Math.round(numberC);
    if (/^-?\d+$/.test(numberA) === false || /^-?\d+$/.test(numberB) === false || /^-?\d+$/.test(numberC) === false) {
        console.log("Error: please add numbers");
    } else {
        if (numberA === numberB || numberA === numberC || numberB === numberC) {
            console.log("Error: please add differents numbers");
        } else {
            if (numberA > numberB & numberB > numberC || numberA < numberB & numberB < numberC) {
                console.log(numberB);
            } else {
                if (numberB > numberA & numberA > numberC || numberB < numberA & numberA < numberC) {
                    console.log(numberA);
                } else {
                    console.log(numberC);
                }
            }
        }
    }
}
findSwiss(process.argv[2], process.argv[3], process.argv[4]);