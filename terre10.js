function primeNumber(value) {
    value = Math.round(value);
    if (isNaN(value) === true) {
        console.log("please add a number");
    } else {
        if (value === 0 || value === 1) {
            console.log(`No, ${value} isn't a prime number.`);
        } else {
            let isPrime = true
            for (let i = 2; i <= Math.sqrt(value); i++) {
                if (value % i === 0) {
                    isPrime = false;
                }
            }
            if (isPrime) {
                console.log(`Yes, ${value} is a prime number.`);
            } else {
                console.log(`No, ${value} isn't a prime number.`);
            }
        }

    }
}
primeNumber(process.argv[2]);