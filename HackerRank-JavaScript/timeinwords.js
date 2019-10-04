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

// Complete the timeInWords function below.
function timeInWords(h, m) {
  let timeinwords = [
    'zero',
    'one', 'two', 'three', 'four', 'five',
    'six', 'seven', 'eight', 'nine', 'ten',
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
    'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty',
    'twenty one', 'twenty two', 'twenty three', 'twenty four', 'twenty five',
    'twenty six', 'twenty seven', 'twenty eight', 'twenty nine'
  ]

  if (m === 0) {
    return timeinwords[h] + " o' clock"
  }

  let time = ''

  if (m % 30 === 0) {
    time += 'half'
  } 
  else if (m % 15 === 0) {
    time += 'quarter'
  }
    else {
        let min = m < 30 ? timeinwords[m] : timeinwords[60 - m]
        time += min
        
        time += m % 15 === 1 ? ' minute' : ' minutes'
    }

  if (m < 31) {
    time += ' past '
  } 
    else {
    time += ' to '
    h++
  }

  time += timeinwords[h]

  return time
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const h = parseInt(readLine(), 10);

    const m = parseInt(readLine(), 10);

    let result = timeInWords(h, m);

    ws.write(result + "\n");

    ws.end();
}