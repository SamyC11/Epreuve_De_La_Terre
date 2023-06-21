function division(input1, input2) {
    if (isNaN(input1) || isNaN(input2) || input2 === 0 || input2 > input1) {
        console.log("Error");
    } else {
        console.log(`résultat: ${Math.round(input1 / input2)}`);
        console.log(`reste: ${(input1 % input2)}`);
    }
}
division(parseInt(process.argv[2]), parseInt(process.argv[3]));