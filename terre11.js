function convert24to12(value) {
    hours = parseInt(value.slice(0, 2), 10);
    minutes = parseInt(value.slice(3, 5), 10);
    colon = value.slice(2, 3);

    if (value.length !== 5 || colon !== ":" || hours > 24 || hours < 0 || isNaN(hours) || minutes > 59 || minutes < 0 || isNaN(minutes)) {
        console.log("Error");
    } else {
        if (hours > 12 || hours < 1) {
            hours = 12 - (24 - hours);
            console.log(`${hours}${colon}${minutes} PM`);
        } else {
            console.log(`${hours}${colon}${minutes} AM`);
        }
    }
}
convert24to12(process.argv[2]);

