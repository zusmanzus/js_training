const calculatorInput = document.getElementById('calculator-input');
const calculatorOutput = document.getElementById('calculator-output');
const calculatorButtons = document.getElementById('calculator-buttons');

let firstNumber = '';
let secondNumber = '';
let operation = '';


calculatorButtons.addEventListener('click', function(e) {
  const button = e.target;
  const buttonValue = button.textContent;
  
  if (buttonValue === 'C') {
    calculatorInput.textContent = '';
    calculatorOutput.textContent = '';
    firstNumber = '';
    secondNumber = '';
    operation = '';
    
  } else if (button.classList.contains('number')) {
    if (operation.length > 0) {
      secondNumber += buttonValue;
    }
    else {
        firstNumber += buttonValue;
    }
    
  } else if (button.classList.contains('operator')) {
    operation = buttonValue;
  
  } else if (buttonValue === '=') {
    firstNumber = +firstNumber;
    secondNumber = +secondNumber;
    
    if (operation === '*') {
      calculatorOutput.textContent = firstNumber * secondNumber;
    } else if (operation === '/') {
      calculatorOutput.textContent = firstNumber / secondNumber;
    } else if (operation === '+') {
      calculatorOutput.textContent = firstNumber + secondNumber;
    } else if (operation === '-') {
      calculatorOutput.textContent = firstNumber - secondNumber;
    }
    
  } else if (buttonValue === '.') {
    if (operation.length > 0) {
      secondNumber += buttonValue;
    }
    else {
        firstNumber += buttonValue;
    }
  }
  

  calculatorInput.textContent = `${firstNumber} ${operation} ${secondNumber}`;
});