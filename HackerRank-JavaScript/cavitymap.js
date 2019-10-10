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

// Complete the cavityMap function below.
function cavityMap(grid) {
    const twoDArr = grid.map(ele => ele.split(''));

    for (let i = 1; i < twoDArr.length - 1; i++) {
        for (let j = 1; j < twoDArr[i].length - 1; j++) {
            if (horizontalCheck(twoDArr, i, j) && verticalCheck(twoDArr, i, j)) {
                twoDArr[i][j] = 'X';
            }
        }
    }
    const newGrid = twoDArr.map(ele => ele.join(''));
    return newGrid;
}

function horizontalCheck(arr, column, row) {
    if (arr[column][row] > arr[column][row - 1] && arr[column][row] > arr[column][row + 1]) {
        return true;
    } else {
        return false;
    }
}

function verticalCheck(arr, column, row) {
    if (arr[column][row] > arr[column - 1][row] && arr[column][row] > arr[column + 1][row]) {
        return true;
    } else {
        return false;
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let grid = [];

    for (let i = 0; i < n; i++) {
        const gridItem = readLine();
        grid.push(gridItem);
    }

    let result = cavityMap(grid);

    ws.write(result.join("\n") + "\n");

    ws.end();
}