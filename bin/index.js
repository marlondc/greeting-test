#! /usr/bin/env node
const greet = require("./greet.js");

const command = process.argv.slice(2, 3);

if (command.length === 0) {
    return console.log("no command passed through");
}

if (command[0] === "greet") {
    return greet();
}

return console.log("Command not found :(")