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