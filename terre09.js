function squareRoot(value) {
    value = Math.round(value);
    let accuracy = 0.01;
    let estimate = value / 2;
    let difference = estimate ** 2 - value;

    if (value < 0 || isNaN(value) === true || value === "") {
        console.log("please enter a positive integer");
    } else {
        while (difference > accuracy) {
            estimate = (estimate + (value / estimate)) / 2;
            difference = estimate ** 2 - value;
        }
        console.log(estimate.toFixed(2));
    }
}
squareRoot(process.argv[2]);