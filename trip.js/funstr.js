// String Functions
function reverseString() {
    const input = document.getElementById("userInput").value;
    const result = input.split("").reverse().join("");
    displayResult(result);
}

function toUpperCase() {
    const input = document.getElementById("userInput").value;
    const result = input.toUpperCase();
    displayResult(result);
}

function toLowerCase() {
    const input = document.getElementById("userInput").value;
    const result = input.toLowerCase();
    displayResult(result);
}

function countCharacters() {
    const input = document.getElementById("userInput").value;
    const result = `Character Count: ${input.length}`;
    displayResult(result);
}

function countWords() {
    const input = document.getElementById("userInput").value;
    const result = `Word Count: ${input.trim().split(/\s+/).length}`;
    displayResult(result);
}

// Math Operator Functions
function add() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const result = `Sum: ${num1 + num2}`;
    displayResult(result);
}

function subtract() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const result = `Difference: ${num1 - num2}`;
    displayResult(result);
}

function multiply() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const result = `Product: ${num1 * num2}`;
    displayResult(result);
}

function divide() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    if (num2 === 0) {
        displayResult("Error: Division by zero is undefined.");
    } else {
        const result = `Quotient: ${num1 / num2}`;
        displayResult(result);
    }
}

function modulus() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const result = `Remainder: ${num1 % num2}`;
    displayResult(result);
}

function exponent() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const result = `Exponentiation: ${num1 ** num2}`;
    displayResult(result);
}

// Array Methods
function filterArray() {
    const input = document.getElementById("arrayInput").value;
    const arr = input.split(',').map(Number);
    const result = arr.filter(num => num % 2 === 0);
    displayResult(`Even Numbers: [${result.join(', ')}]`);
}

function mapArray() {
    const input = document.getElementById("arrayInput").value;
    const arr = input.split(',').map(Number);
    const result = arr.map(num => num * 2);
    displayResult(`Doubled Values: [${result.join(', ')}]`);
}

function reduceArray() {
    const input = document.getElementById("arrayInput").value;
    const arr = input.split(',').map(Number);
    const result = arr.reduce((acc, curr) => acc + curr, 0);
    displayResult(`Sum of Array: ${result}`);
}

function sortArray() {
    const input = document.getElementById("arrayInput").value;
    const arr = input.split(',').map(Number);
    const result = arr.sort((a, b) => a - b);
    displayResult(`Sorted Array: [${result.join(', ')}]`);
}
// Display Result Function
function displayResult(result) {
    const resultElement = document.getElementById("result");
    resultElement.textContent = result;
}