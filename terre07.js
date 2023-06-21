function commandLineVerification(commandLine) {
    if (process.argv[3] !== undefined || commandLine === undefined || isNaN(commandLine) === false) {
        console.log("Error");
    } else {
        commandLine = commandLine.split("");
        let count = 0;
        for (let i = 0; i < commandLine.length; i++) {
            count++;
        }
        console.log(count);
    }
}
commandLineVerification(process.argv[2]);