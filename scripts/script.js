const ADD = document.querySelector("#add").textContent;
const SUBTRACT = document.querySelector("#subtract").textContent;
const MULTIPLY = document.querySelector("#multiply").textContent;
const DIVIDE = document.querySelector("#divide").textContent;

let displayValue = "";
let operatorExists = false;

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

function operate(a, b, op) {
    operatorExists = false;
    a = parseFloat(a);
    b = parseFloat(b);
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
            if (b === 0) {
                alert("can't divide by 0")
                return 0;
            } else {
                return divide(a,b);
            }
            break;
        default:
    }
}

function isOperator(op) {
    return op === ADD || op === SUBTRACT || op === MULTIPLY || op === DIVIDE;
}

function parseDisplay() {
    let displayArr = displayValue.split("");
    let a = "";
    let b = "";
    let op = "";

    displayArr.forEach(val => {
        if (op === "" && !isOperator(val)) {
            a = a.concat(val);
        } else if (!isOperator(val)) {
            b = b.concat(val);
        } else {
            op = op.concat(val);
        }
    });

    return [a, b, op];
}

function calculate() {
    let eq = parseDisplay();
    let res = operate(eq[0], eq[1], eq[2]);
    clearDisplay();
    updateDisplay(res);
}

function addButtonListeners() {
    document.querySelectorAll(".number").forEach( button => {
        button.addEventListener("click", ()=> {
            updateDisplay(button.textContent);
        });
    });

    document.querySelectorAll(".op").forEach( button => {
        button.addEventListener("click", ()=> {
            if (operatorExists) {
                calculate();
            }
            operatorExists = true;
            updateDisplay(button.textContent);
        });
    });

    document.querySelector(".equal").addEventListener("click", calculate);

    document.querySelector(".AC").addEventListener("click", clearDisplay);

    document.querySelector(".C").addEventListener("click", ()=> {
        displayValue = displayValue.substring(0,displayValue.length-1);
        if (displayValue.length === 0) {
            updateDisplay(0);
        } else {
            let displayElement = document.querySelector(".display");
            displayElement.textContent = displayValue;
        }
    });
}

function parseDisplayValue() {
    if(displayValue.length > 1 && displayValue[0] === "0") {
        displayValue = displayValue.slice(1);
    }
}

function clearDisplay() {
    displayValue = "";
    updateDisplay(0);
}

function updateDisplay(input) {
    displayValue += input;
    parseDisplayValue();
    let displayElement = document.querySelector(".display");
    displayElement.textContent = displayValue;
}

function init() {
    addButtonListeners();
    updateDisplay(0);
}

init();

