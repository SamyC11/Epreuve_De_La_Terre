function convert12to24(value) {
    hours = parseInt(value.slice(0, 2), 10);
    minutes = parseInt(value.slice(3, 5), 10);
    colon = value.slice(2, 3);
    meridiem = value.slice(5, 7).toUpperCase();

    if (value.length !== 7 || colon !== ":") {
        console.log("Error");
    } else {
        if (hours > 12 || hours < 1 || isNaN(hours)) {
            console.log("Please add a hours number between 1 and 12")
        } else {
            if (minutes > 59 || minutes < 0 || isNaN(minutes)) {
                console.log("Please add a minutes number between 0 and 59");
            } else {
                if (meridiem !== "PM" & meridiem !== "AM") {
                    console.log("Please enter a meridem indicator");
                } else {
                    if (meridiem === "PM") {
                        hours = hours + 12;
                        console.log(`${hours.toString().padStart(2, "0")} : ${minutes.toString().padStart(2, "0")}`);
                    } else {
                        console.log(`${hours.toString().padStart(2, "0")} : ${minutes.toString().padStart(2, "0")}`);
                    }
                }

            }
        }
    }
}

convert12to24(process.argv[2]);
