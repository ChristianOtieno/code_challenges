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

// Complete the encryption function below.
function encryption(s) {
    let s_length = s.length
    let row_num = Math.floor(Math.sqrt(s_length))
    let col_num = Math.ceil(Math.sqrt(s_length))
    while (row_num * col_num < s_length) {
        row_num++
    }
    let output = ''
    for (let i = 0; i < col_num; i++) {
        for (let j = 0; j < row_num; j++) {
            let letter = s[i + j * col_num]
            output += letter != null ? letter : ''
        }
        output += ' '
    }
    return output
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = encryption(s);

    ws.write(result + "\n");

    ws.end();
}