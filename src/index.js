'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    let positive=0,negative=0,zero=0;
    
    arr.forEach(n=>{
        if(n>0){
            positive++;
        }else if(n<0){
            negative++
        }else{
            zero++
        }
    })
    
    console.log((positive/arr.length).toFixed(4))
    console.log((negative/arr.length).toFixed(4))
    console.log((zero/arr.length).toFixed(4))
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
