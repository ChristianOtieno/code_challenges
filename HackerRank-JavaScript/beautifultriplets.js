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

// Complete the beautifulTriplets function below.
function beautifulTriplets(d, arr) {
    let dict = {};
    let i = 0;
    for (let i = 0; i < arr.length; i += 1) {
        const temp = arr[i];
        dict[temp] = dict[temp] ? (dict[temp] += 1) : 1;
    }

    i = arr[0];
    const max = arr[arr.length - 1];

    let beautifultriplets = 0;

    while (i <= max) {
        const j = i + d;
        const k = j + d;

        if (dict[i] && dict[j] && dict[k]) {
            beautifultriplets += Math.max(dict[i], dict[j], dict[k]);
        }

        i += 1;
    }
    return beautifultriplets;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nd = readLine().split(" ");

    const n = parseInt(nd[0], 10);

    const d = parseInt(nd[1], 10);

    const arr = readLine()
        .split(" ")
        .map(arrTemp => parseInt(arrTemp, 10));

    let result = beautifulTriplets(d, arr);

    ws.write(result + "\n");

    ws.end();
}