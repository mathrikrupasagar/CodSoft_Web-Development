let display = document.getElementById('display');
let currentInput = '';
let firstOperand = null;
let secondOperand = null;
let currentOperation = null;
let shouldResetDisplay = false;

function appendNumber(number) {
  if (shouldResetDisplay) {
    resetDisplay();
  }
  if (currentInput === '0') {
    currentInput = number.toString();
  } else {
    currentInput += number;
  }
  updateDisplay();
}

function appendDecimal() {
  if (shouldResetDisplay) {
    resetDisplay();
  }
  if (!currentInput.includes('.')) {
    currentInput += '.';
    updateDisplay();
  }
}

function chooseOperation(operation) {
  if (currentInput === '') return;
  if (firstOperand !== null && currentOperation !== null) {
    compute();
  }
  firstOperand = parseFloat(currentInput);
  currentOperation = operation;
  shouldResetDisplay = true;
}

function compute() {
  if (firstOperand === null || currentOperation === null) return;
  secondOperand = parseFloat(currentInput);
  let result;
  switch (currentOperation) {
    case '+':
      result = firstOperand + secondOperand;
      break;
    case '-':
      result = firstOperand - secondOperand;
      break;
    case '*':
      result = firstOperand * secondOperand;
      break;
    case '/':
      result = firstOperand / secondOperand;
      break;
    default:
      return;
  }
  currentInput = result.toString();
  updateDisplay();
  firstOperand = null;
  currentOperation = null;
  shouldResetDisplay = true;
}

function clearDisplay() {
  currentInput = '';
  firstOperand = null;
  secondOperand = null;
  currentOperation = null;
  updateDisplay();
}

function resetDisplay() {
  currentInput = '';
  shouldResetDisplay = false;
}

function updateDisplay() {
  display.innerText = currentInput || '0';
}