function powerOfNumber(base, exponent) {
    exponent = parseInt(exponent);
    if (isNaN(base) === true || base < 0 || isNaN(exponent) === true || exponent < 0) {
        console.log("Error");
    }
    else if (exponent == 0) {
        console.log("1");
    }
    else {
        let array = Array(exponent);
        let result = 1;
        for (const i of array) {
            result *= base;
        }
        console.log(result);
    };
}
powerOfNumber(process.argv[2], process.argv[3]);// Add 2 values