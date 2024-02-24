document.addEventListener('DOMContentLoaded', function() {
    const display = document.querySelector('.display');
    let currentInput = '';
    let operator = '';
    let previousInput = '';
    let result = '';
  
    function updateDisplay(value) {
      display.textContent = value;
    }
  
    function calculate() {
      let num1 = parseFloat(previousInput);
      let num2 = parseFloat(currentInput);
      switch (operator) {
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        case 'x':
          result = num1 * num2;
          break;
        case '÷':
          result = num1 / num2;
          break;
        default:
          break;
      }
      updateDisplay(result);
    }
  
    document.querySelectorAll('.number').forEach(button => {
      button.addEventListener('click', function() {
        currentInput += this.textContent;
        updateDisplay(currentInput);
      });
    });
  
    document.querySelectorAll('.operator').forEach(button => {
      button.addEventListener('click', function() {
        if (currentInput !== '') {
          if (previousInput !== '') {
            calculate();
            previousInput = result;
          } else {
            previousInput = currentInput;
          }
          currentInput = '';
        }
        operator = this.textContent;
      });
    });
  
    document.querySelector('.equals').addEventListener('click', function() {
      if (previousInput !== '' && currentInput !== '') {
        calculate();
        previousInput = '';
        currentInput = result.toString();
      }
    });
  
    document.querySelector('.decimal').addEventListener('click', function() {
      if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay(currentInput);
      }
    });
  
    document.querySelector('.clear').addEventListener('click', function() {
      currentInput = currentInput.slice(0, -1); // Remove the last character
      updateDisplay(currentInput || '0'); // If currentInput is empty, display '0'
    });
  
    document.querySelector('.clear-all').addEventListener('click', function() {
      currentInput = '';
      previousInput = '';
      operator = '';
      updateDisplay('0');
    });
  
    document.querySelector('.square').addEventListener('click', function() {
      let num = parseFloat(currentInput);
      if (!isNaN(num)) {
        result = num * num;
        updateDisplay(result);
        currentInput = result.toString();
      }
    });
  
    document.querySelector('.sqrt').addEventListener('click', function() {
      let num = parseFloat(currentInput);
      if (!isNaN(num)) {
        result = Math.sqrt(num);
        updateDisplay(result);
        currentInput = result.toString();
      }
    });
  
  });
  