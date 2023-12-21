const ADD = 0;
const SUBTRACT = 1;
const MULTIPLY = 2;
const DIVIDE = 3;

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a*b;
}

function divide(a, b) {
    return a/b;
}

function operate(a, op, b) {
    switch(op) {
        case ADD:
            return add(a,b);
            break;
        case SUBTRACT:
            return subtract(a,b);
            break;
        case MULTIPLY:
            return multiply(a,b);
            break;
        case DIVIDE:
            return divide(a,b);
            break;
        default:
    }
}

function calculator(a, op, b) {

}