const firstInput = document.getElementById('num1') as HTMLInputElement
const secondInput = document.getElementById('num2') as HTMLInputElement
const buttonSum = document.getElementById('sumButton') as HTMLElement
const buttonSubtract = document.getElementById('subtractButton') as HTMLElement

type MathematicalOperations = 'sum' | 'subtract'

interface Values{
    operation: MathematicalOperations
    firstNumber: number
    secondNumber: number
}

function sumAndSubtractOperations ({operation, firstNumber, secondNumber}: Values): number{
    if(operation === 'sum'){
        return firstNumber + secondNumber
    } else{
        return firstNumber - secondNumber
    }
}

buttonSum.addEventListener('click', function(){
    const sumResult = sumAndSubtractOperations({
        operation: 'sum',
        firstNumber: Number(firstInput.value),
        secondNumber: Number(secondInput.value)
    })
    console.log(sumResult)
})

buttonSubtract.addEventListener('click', function(){
    const subtractResult = sumAndSubtractOperations({
        operation: 'subtract',
        firstNumber: Number(firstInput.value),
        secondNumber: Number(secondInput.value)
    })
    console.log(subtractResult)
})