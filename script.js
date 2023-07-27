let currentInput = "0";
let currentOperator = "";
let currentTotal = 0;

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function percent(num) {
    return num / 100;
}

function operate(leftOp, operator, rightOp) {
    switch(operator) {
        case "+":
            currentTotal = add(leftOp, rightOp);
            break;
        case "-":
            currentTotal = subtract(leftOp, rightOp);
            break;
        case "*":
            currentTotal = multiply(leftOp, rightOp);
            break;
        case "/":
            currentTotal = divide(leftOp, rightOp);
            break;
    }
}

function appendNumber(number) {
    //console.log(currentInput);
    if(number === "0" && currentInput === "0") {
        updateResult(currentInput);
        return;
    } else if (currentInput === "0" && number !== "." && number !== "-") {
        currentInput = number;
        updateResult(currentInput);
        return;
    } else if(number === "." && currentInput.includes(".")) {
        return;
    } else if(number === "-" && (currentInput === "0" || currentInput === "0.") ) {
        return;
    } else if (number === "-") {
        if(currentInput.charAt(0) === "-") {
            currentInput = currentInput.replace("-", "");
            updateResult(currentInput);
            return;
        }
        currentInput = `-${currentInput}`;
        updateResult(currentInput);
        return;
    }
    currentInput += number;
    updateResult(currentInput);
}

function updateResult(display) {
    const output = document.querySelector(".output");
    // output.textContent = currentInput || currentTotal;
    output.textContent = display;
}

//get value from user
const numbers = document.querySelectorAll(".numbers");

numbers.forEach((number) => {
    number.addEventListener("click", (e) => {
        appendNumber(e.target.value);
    });

});

let hasLeftOperand = false;
let leftOperand = 0;
let rightOperand = 0;

function calculate() {
    const operators = document.querySelectorAll(".operators");

    operators.forEach((operator) => {
        operator.addEventListener("click", (e) => {
            if(e.target.value === "=") {
                if (currentOperator === "/" && rightOperand === 0) {
                    updateResult("ERROR");
                    return;
                }
                rightOperand = +currentInput;
                operate(leftOperand, currentOperator, rightOperand);
                leftOperand = currentTotal;
                rightOperand = 0;
                currentOperator = "";
                currentInput = "0";
                updateResult(currentTotal);
            } else {
                if(!hasLeftOperand) {
                    leftOperand = +currentInput;
                    currentInput = "0";
                    hasLeftOperand = true;
                    currentOperator = e.target.value;
                } else if (hasLeftOperand) {
                    rightOperand = +currentInput;
                    currentInput = "0";
                    if (currentOperator === "/" && rightOperand === 0) {
                        updateResult("ERROR");
                        return;
                    }
                    operate(leftOperand, currentOperator, rightOperand);
                    rightOperand = 0;
                    leftOperand = currentTotal;
                    updateResult(currentTotal);
                    currentOperator = e.target.value;
                }
            }
            // switch(e.target.value) {
            //     case "+":
            //     case "-":
            //     case "*":
            //     case "/":
            //         if(!hasLeftOperand) {
            //             leftOperand = +currentInput;
            //             currentInput = "0";
            //             hasLeftOperand = true;
            //             currentOperator = e.target.value;
            //         } else if (hasLeftOperand) {
            //             rightOperand = +currentInput;
            //             currentInput = "0";
            //             operate(leftOperand, e.target.value, rightOperand);
            //             rightOperand = 0;
            //             leftOperand = currentTotal;
            //             updateResult(currentTotal);
            //             currentOperator = e.target.value;
            //         }
            //         break;
            //     case "=":
            //         rightOperand = +currentInput;
            //         operate(leftOperand, currentOperator, rightOperand);
            //         leftOperand = currentTotal;
            //         rightOperand = 0;
            //         currentOperator = "";
            //         currentInput = "0";
            //         updateResult(currentTotal);
            //         break;
            // }
        });
    });

    // get percentage
    const percentage = document.querySelector(".percent");
    percentage.addEventListener("click", () => {
        if(!hasLeftOperand) {
            leftOperand = +currentInput;
            currentInput = "0";
            hasLeftOperand = true;
            currentTotal = percent(leftOperand);
            updateResult(currentTotal);
        } else {

        }
    });
}

function clear() {
    currentInput = "0";
    hasLeftOperand = false;
    leftOperand = 0;
    rightOperand = 0;
    currentOperator = "";
    currentTotal = 0;
    updateResult(currentInput);
}

const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", clear);

function clearEntry() {
    currentInput = "0";
    updateResult(currentInput);
}

const clearEntryBtn = document.querySelector(".clear-entry");
clearEntryBtn.addEventListener("click", clearEntry);
g
calculate();