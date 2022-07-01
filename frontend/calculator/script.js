function welcome() {
    alert('Hi there!!! \nGreat to have you here!!!! \nClick on ok to use my calculator....')
}

// Define all available mathematical operations
function addition(a, b) {
    return (a + b)
}
function subtraction(a, b) {
    return a - b
}
function multiplication(a, b) {
    return a * b
}
function division(a, b) {
    return a / b
}
function modulo(a, b) {
    return a % b
}


// Check if input is an integer
function inputCheck(num) {
    return (num && Number.isInteger(num))
}

function runCalculatorAgain() {
    let runAgain = prompt(`Would you like to run another calculation? \nEnter Y for YES and N for NO`)

    if (runAgain.toUpperCase() == 'Y') {
        calculate()
    } else if (runAgain.toUpperCase() == 'N') {
        alert( `I hate to see you go... \nHope to see you sometime soooon.... \nToodles!!!!`)
    } else {
        runCalculatorAgain()
    }
}

function isOperationValid(operation) {
    // Check if operation is valid

    return (
        operation == '+' || 
        operation == '-' || 
        operation == '*' ||
        operation == '/' ||
        operation == 'mod'
        )
}


function calculate() {
    let operation 

    while (true) {
        operation = prompt(`Please type in the math operation you would like to complete: \n+ for addition \n- for subtraction \n* for multiplication \n/ for division \nmod for modulo
        `)
        if (isOperationValid(operation)) {
            break
        } else {
            alert ('Please pick from the list or specified operations')
        }
    }


    let firstNumber 
    while (true) {
        // Prompt user for first number
        firstNumber = parseInt(prompt("Enter first number: "))

        if (inputCheck(firstNumber)) {
            break
        } else {
        alert("You need to enter a valid integer")
        }
    }

   
    let secondNumber
    while (true) {
        // Prompt user for second number
        secondNumber = parseInt(prompt("Enter second number: "))
        
        if (inputCheck(secondNumber)) {
            break
        } else {
            alert("You need to enter a valid integer")
        }
    }

    // Check operations, if valid run operation and return answer, else, run again
    let operationResult = ""
    if (operation == '+') {
        operationResult = firstNumber + ' + ' + secondNumber + ' = ' + addition(firstNumber, secondNumber)
    } else if(operation == '-') {
        operationResult = firstNumber + ' - ' + secondNumber + ' = ' +  subtraction(firstNumber, secondNumber)
    } else if (operation == '*') {
        operationResult = firstNumber + ' x ' + secondNumber + ' = ' +  multiplication(firstNumber, secondNumber)
    } else if (operation == '/') {
        operationResult = firstNumber + ' / ' + secondNumber + ' = ' +  division(firstNumber, secondNumber)
    } else if (operation == 'mod') {
        operationResult = firstNumber + ' mod ' + secondNumber + ' = ' +  modulo(firstNumber, secondNumber)
    } else {
        operationResult = 'Please pick from the list or specified operations'
    }

    alert(operationResult)

    runCalculatorAgain()

}

welcome()
calculate()