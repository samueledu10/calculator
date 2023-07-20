function operate(leftOp, operator, rightOp) {
    switch(operator) {
        case "+":
            return leftOp + rightOp;
        case "-":
            return leftOp - rightOp;
        case "*":
            return leftOp * rightOp;
        case "/":
            if(rightOp == 0) {
                return "ERROR";
            }
            return leftOp / rightOp;
        default:
            return "ERROR";
    }
}
const output = document.querySelector(".output");

function getValue() {
    const numbers = document.querySelectorAll(".numbers");

    numbers.forEach((number) => {
        number.addEventListener("click", (e) => {

            switch(e.target.value) {
                case "0":
                    if (output.textContent.length === 1 && output.textContent.includes("0")){
                        break;
                    }
                    output.textContent += e.target.value;
                    break;
                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7":
                case "8":
                case "9":
                    if (output.textContent.length === 1 && output.textContent.includes("0")){
                        output.textContent = e.target.value;
                        break;
                    }
                    output.textContent += e.target.value;
                    break;
                case ".":
                    if (output.textContent.includes(".")){
                        break;
                    }
                    output.textContent += e.target.value;
                    break;
                case "-":
                    if( (output.textContent.length === 1 && output.textContent.includes("0")) || (output.textContent.length === 2 && output.textContent.includes("0")) ) {
                        break;
                    }
                    else if(output.textContent.charAt(0) === "-") {
                        output.textContent = output.textContent.replace("-", "");
                        break;
                    }
                    output.textContent = `-${output.textContent}`;
                    break;

            }
        });

    });
}

function calculate() {
    getValue();
}
calculate();