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

// Complete the fairRations function below.
function fairRations(B) {
    let totalBreads = 0;
    let result = 0;
    for(let i=0; i<B.length; i++) {
        totalBreads += B[i];
        if(totalBreads % 2 != 0) {
            result += 2;
        }
    }
    return totalBreads % 2 == 0 ? result : 'NO';
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const N = parseInt(readLine(), 10);

    const B = readLine().split(' ').map(BTemp => parseInt(BTemp, 10));

    let result = fairRations(B);

    ws.write(result + "\n");

    ws.end();
}
