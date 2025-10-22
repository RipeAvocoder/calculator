function add(numOne, numTwo) {
  return numOne + numTwo;
}

function subtract(numOne, numTwo) {
  return numOne - numTwo;
}

function multiply(numOne, numTwo) {
  return numOne * numTwo;
}

function divide(numOne, numTwo) {
  return numOne / numTwo;
}

var calculatorGrid = ['1', '2', '3', '4' ,'5', '6', '7', '8', '9', '0'];

var numOne;
var numTwo;
var operator;

function operate(numOne, numTwo, operator) {
   switch(operator) {
    case "+":
      add(numOne, numTwo)
    case "-":
      subtract(numOne, numTwo);
    case "*":
      multiply(numOne, numTwo);
    case "/":
      divide(numOne, numTwo);
   }
}

console.log("Add: " + add(3, 3));
console.log("Subtract: " + subtract(3, 2));
console.log("Multiply: " + multiply(3, 3));
console.log("Divide: " + divide(30, 2));
