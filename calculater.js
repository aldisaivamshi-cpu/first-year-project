let firstNumber = "";
let secondNumber = "";
let operator = "";
let isSecondNumber = false;

const display = document.getElementById("display");

function appendNumber(number) {
      if (!isSecondNumber) {
            firstNumber += number;
            display.value = firstNumber;
      } else {
            secondNumber += number;
            display.value = secondNumber;
      }
}

function setOperator(op) {
      if (firstNumber === "") return;
      operator = op;
      isSecondNumber = true;
}

function calculate() {
      let result;

      let num1 = parseFloat(firstNumber);
      let num2 = parseFloat(secondNumber);

      if (operator === "+") result = num1 + num2;
      else if (operator === "-") result = num1 - num2;
      else if (operator === "*") result = num1 * num2;
      else if (operator === "/") {
            if (num2 === 0) {
                  display.value = "Error";
                  return;
            }
            result = num1 / num2;
      }

      display.value = result;

      firstNumber = result.toString();
      secondNumber = "";
      operator = "";
      isSecondNumber = false;
}

function clearDisplay() {
      firstNumber = "";
      secondNumber = "";
      operator = "";
      isSecondNumber = false;
      display.value = "";
}

function deleteLast() {
      if (!isSecondNumber) {
            firstNumber = firstNumber.slice(0, -1);
            display.value = firstNumber;
      } else {
            secondNumber = secondNumber.slice(0, -1);
            display.value = secondNumber;
      }
}