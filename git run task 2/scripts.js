// scripts.js
let display = document.getElementById('display');
let currentOperand = '';
let previousOperand = '';
let operation = null;

function appendNumber(number) {
    currentOperand += number;
    updateDisplay();
}

function operate(op) {
    if (currentOperand === '') return;
    if (previousOperand !== '') calculate();
    operation = op;
    previousOperand = currentOperand;
    currentOperand = '';
}

function calculate() {
    if (previousOperand === '' || currentOperand === '') return;
    let result;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }
    currentOperand = result;
    operation = null;
    previousOperand = '';
    updateDisplay();
}

function clearDisplay() {
    currentOperand = '';
    previousOperand = '';
    operation = null;
    updateDisplay();
}

function updateDisplay() {
    display.innerText = currentOperand;
}
