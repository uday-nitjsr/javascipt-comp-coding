/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("\n\nprocess.stdin.resume();\nprocess.stdin.setEncoding('utf-8');\n\nlet inputString = '';\nlet currentLine = 0;\n\nprocess.stdin.on('data', function(inputStdin) {\n    inputString += inputStdin;\n});\n\nprocess.stdin.on('end', function() {\n    inputString = inputString.split('\\n');\n\n    main();\n});\n\nfunction readLine() {\n    return inputString[currentLine++];\n}\n\n/*\n * Complete the 'plusMinus' function below.\n *\n * The function accepts INTEGER_ARRAY arr as parameter.\n */\n\nfunction plusMinus(arr) {\n    // Write your code here\n    let positive=0,negative=0,zero=0;\n    \n    arr.forEach(n=>{\n        if(n>0){\n            positive++;\n        }else if(n<0){\n            negative++\n        }else{\n            zero++\n        }\n    })\n    \n    console.log((positive/arr.length).toFixed(4))\n    console.log((negative/arr.length).toFixed(4))\n    console.log((zero/arr.length).toFixed(4))\n}\n\nfunction main() {\n    const n = parseInt(readLine().trim(), 10);\n\n    const arr = readLine().replace(/\\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));\n\n    plusMinus(arr);\n}\n\n\n//# sourceURL=webpack://wissen-coding-challenge/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;