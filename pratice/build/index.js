"use strict";
const firstInput = document.getElementById('num1');
const secondInput = document.getElementById('num2');
const buttonSum = document.getElementById('sumButton');
const buttonSubtract = document.getElementById('subtractButton');
function sumAndSubtractOperations({ operation, firstNumber, secondNumber }) {
    if (operation === 'sum') {
        return firstNumber + secondNumber;
    }
    else {
        return firstNumber - secondNumber;
    }
}
buttonSum.addEventListener('click', function () {
    const sumResult = sumAndSubtractOperations({
        operation: 'sum',
        firstNumber: Number(firstInput.value),
        secondNumber: Number(secondInput.value)
    });
    console.log(sumResult);
});
buttonSubtract.addEventListener('click', function () {
    const subtractResult = sumAndSubtractOperations({
        operation: 'subtract',
        firstNumber: Number(firstInput.value),
        secondNumber: Number(secondInput.value)
    });
    console.log(subtractResult);
});
