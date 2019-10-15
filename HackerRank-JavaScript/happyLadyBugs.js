'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function nobesides(b) {
    for (var i = 0; i < b.length; i++) {
        if (i == 0 && b[i] != b[i + 1]) return true
        if (i == b.length - 1 && b[i - 1] != b[i]) return true
        if (b[i - 1] != b[i] && b[i] != b[i + 1]) return true
    }
    return false
}
// Complete the happyLadybugs function below.
function happyLadybugs(b) {
    let muster = new Map()
    for (let i = 0; i < b.length; i++)
        muster.set(b[i], 0)
    for (let i = 0; i < b.length; i++)
        muster.set(b[i], muster.get(b[i]) + 1)

    if (muster.size == 0 || (muster.size == 1 && muster.has("_")))
        return "YES"
    "Stop"
    let exit = false;
    muster.forEach((val, key) => {
        if (val == 1 && key != "_") exit = true
    })

    if (exit) return "NO"

    if (muster.has("_") == false && nobesides(b))
        return "NO"
    return "YES"
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const g = parseInt(readLine(), 10);

    for (let gItr = 0; gItr < g; gItr++) {
        const n = parseInt(readLine(), 10);

        const b = readLine();

        let result = happyLadybugs(b);

        ws.write(result + "\n");
    }

    ws.end();
}