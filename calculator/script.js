const calculatorInput = document.getElementById('calculator-input');
const calculatorOutput = document.getElementById('calculator-output');
const calculatorButtons = document.getElementById('calculator-buttons');

let firstNumber = '';
let secondNumber = '';
let operation = '';
let percent;

function clearVariables() {
  firstNumber = '';
  secondNumber = '';
  operation = '';
}

calculatorButtons.addEventListener('click', function(e) {
  const button = e.target;
  const buttonValue = button.textContent;
  
  if (buttonValue === 'C') {
    calculatorInput.textContent = '';
    calculatorOutput.textContent = '';
    clearVariables();
    
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
    
    let result;
    
    if (operation === '*') {
      result = firstNumber * secondNumber;
    } else if (operation === '/') {
      result = firstNumber / secondNumber;
    } else if (operation === '+') {
      result = firstNumber + secondNumber;
    } else if (operation === '-') {
      result = firstNumber - secondNumber;
    }
    
    calculatorOutput.textContent = +result.toFixed(10);
    clearVariables();
    
  } else if (buttonValue === '.') {
    const number = operation.length > 0 ? secondNumber : firstNumber;
    
    
    if (number.length === 0 || number.match(/\./)) {
      return;
    } else {
      if (operation.length > 0) {
        secondNumber += buttonValue;
      } else {
        firstNumber += buttonValue;
      }
    }
  } else if (buttonValue === '%') {
    
      if (operation.length > 0) {
        secondNumber /= 100;
      } else {
        firstNumber /= 100;
      } 
    
      if (calculatorOutput.textContent !== 0) {
        calculatorOutput.textContent /= 100;
      }  
    } 
  
  
  calculatorInput.textContent = `${firstNumber} ${operation} ${secondNumber}`;
});