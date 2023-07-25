let currentInput = "";
let currentOp = "";
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
        case "-":
            currentTotal = subtract(leftOp, rightOp);
        case "*":
            currentTotal = multiply(leftOp, rightOp);
        case "/":
            if(rightOp == 0) {
                currentTotal = "ERROR";
            }
            currentTotal = divide(leftOp, rightOp);
        case "%":
            currentTotal = percent(leftOp);
    }
}

function appendNumber(number) {
    if(number === "0" && currentInput === "0") {
        return;
    } else if(number === "-" && (currentInput === "0" || currentInput === "0.") ) {
        return;
    } else if (number === "-") {
        if(currentInput.charAt(0) === "-") {
            currentInput = currentInput.replace("-", "");
            updateResult();
            return;
        }
        currentInput = `-${currentInput}`;
        updateResult();
        return;
    } else if(number === "." && currentInput.includes(".")) {
        return;
    }
    currentInput += number;
    updateResult();
}

function updateResult() {
    const output = document.querySelector(".output");
    output.textContent = currentInput || currentTotal || 0;
}

function calculate() {

    //get value from user
    const numbers = document.querySelectorAll(".numbers");
    numbers.forEach((number) => {
        number.addEventListener("click", (e) => {
            appendNumber(e.target.value);
        });

    });
}
calculate();