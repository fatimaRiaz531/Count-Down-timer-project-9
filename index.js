#! /usr/bin/env node

import { differenceInSeconds } from "date-fns";
import inquirer from "inquirer";
const res = await inquirer.prompt({
    type: "number",
    name: "UserInput",
    message: "Enter amount of Second",
    validate: (Input) => {
        if (isNaN(Input)) {
            return "Please enter valid number";
        }
        else if (Input > 60) {
            return "Second must within 60";
        }
        else {
            return true;
        }
    }
});
let input = res.UserInput;
function startTime(val) {
    const intTime = new Date().setSeconds(new Date().getSeconds() + val);
    const intervalTime = new Date(intTime);
    setInterval(() => {
        const currentTime = new Date();
        const timeDiff = differenceInSeconds(intervalTime, currentTime);
        if (timeDiff <= 0) {
            console.log('Time has expired');
            process.exit();
        }
        const min = Math.floor((timeDiff % (3600 * 24)) / 3600); // show minutes
        const sec = Math.floor(timeDiff % 60);
        console.log(`${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`);
    }, 1000);
}
startTime(input);
