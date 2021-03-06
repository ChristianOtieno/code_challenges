"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", inputStdin => {
    inputString += inputStdin;
});

process.stdin.on("end", _ => {
    inputString = inputString
        .replace(/\s*$/, "")
        .split("\n")
        .map(str => str.replace(/\s*$/, ""));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the repeatedString function below.
function repeatedString(s, n) {
    // string.replace(searchvalue, newvalue)
    //The g modifier is used to perform a global match (find all matches rather than stopping after the first match).
    let counter_a = s.length - s.replace(/a/g, "").length;

    let repeats = n % s.length;
    // string.substring(start, end)
    let remainder =
        s.substring(0, repeats).length -
        s.substring(0, repeats).replace(/a/g, "").length;
    return counter_a * Math.floor(n / s.length) + remainder;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const n = parseInt(readLine(), 10);

    let result = repeatedString(s, n);

    ws.write(result + "\n");

    ws.end();
}