// Control
const ON_button = document.querySelector("#ON");
ON_button.addEventListener("click", on);
let listenersAdded = false;

// OFF Function
function off() {
    const display = document.querySelector("#display");
    display.textContent = "";
}

// ON Function
function on() {
    // Create a loading screen effect on startup
    const display = document.querySelector("#display");
    display.textContent = "loading...";
    setTimeout(function () { display.textContent = "" }, 1500);

    // Prevents multiple event listeners causing double inputs
    if (!listenersAdded) {
        button_selector();
        listenersAdded = true;
    }
}

// Equal sign function
function equals_fn() {
    // Get operands and operator on the screen
    const expression = document.getElementById('display').innerText;

    try {
        const result = evaluateExpression(expression);
        document.getElementById('display').innerText = result;
    } catch (error) {
        alert("Error in expression: " + error.message);
        document.getElementById('display').innerText = '';
    }
}

// Evaluate the expression
function evaluateExpression(expression) {
    const operators = ['+', '-', '*', '/', '%', '^', 'SIN', 'COS', 'TAN', 'LOG'];
    let result = expression;

    // Replace '^' with '**' for power operation in JavaScript
    result = result.replace(/\^/g, '**');

    // Replace functions with JavaScript equivalents
    result = result.replace(/SIN/g, 'Math.sin');
    result = result.replace(/COS/g, 'Math.cos');
    result = result.replace(/TAN/g, 'Math.tan');
    result = result.replace(/LOG/g, 'Math.log');

    // Evaluate the expression using Function constructor
    try {
        return new Function('return ' + result)();
    } catch (error) {
        throw new Error("Invalid expression");
    }
}

// Controls Operations
function operations(op1, op2, op) {
    if (op == "+") { return +op1 + +op2 }
    else if (op == "-") { return +op1 - +op2 }
    else if (op == "*") { return +op1 * +op2 }
    else if (op == "/") { return +op1 / +op2 }
    else if (op == "%") { return +op1 % +op2 }
    else { alert("Operation not enabled") }
}

// Controls button input
function button_selector() {
    document.getElementById('OFF').addEventListener('click', off);

    document.getElementById('AC').addEventListener('click', () => {
        document.getElementById('display').innerText = '';
    });

    document.getElementById('ON').addEventListener('click', on);

    document.getElementById('SIN').addEventListener('click', () => {
        document.getElementById('display').innerText += 'SIN(';
    });

    document.getElementById('COS').addEventListener('click', () => {
        document.getElementById('display').innerText += 'COS(';
    });

    document.getElementById('TAN').addEventListener('click', () => {
        document.getElementById('display').innerText += 'TAN(';
    });

    document.getElementById('POW').addEventListener('click', () => {
        document.getElementById('display').innerText += '^';
    });

    document.getElementById('LOG').addEventListener('click', () => {
        document.getElementById('display').innerText += 'LOG(';
    });

    document.getElementById('seven').addEventListener('click', () => {
        document.getElementById('display').innerText += '7';
    });

    document.getElementById('eight').addEventListener('click', () => {
        document.getElementById('display').innerText += '8';
    });

    document.getElementById('nine').addEventListener('click', () => {
        document.getElementById('display').innerText += '9';
    });

    document.getElementById('open-parenthesis').addEventListener('click', () => {
        document.getElementById('display').innerText += '(';
    });

    document.getElementById('close-parenthesis').addEventListener('click', () => {
        document.getElementById('display').innerText += ')';
    });

    document.getElementById('four').addEventListener('click', () => {
        document.getElementById('display').innerText += '4';
    });

    document.getElementById('five').addEventListener('click', () => {
        document.getElementById('display').innerText += '5';
    });

    document.getElementById('six').addEventListener('click', () => {
        document.getElementById('display').innerText += '6';
    });

    document.getElementById('multiply').addEventListener('click', () => {
        document.getElementById('display').innerText += '*';
    });

    document.getElementById('divide').addEventListener('click', () => {
        document.getElementById('display').innerText += '/';
    });

    document.getElementById('one').addEventListener('click', () => {
        document.getElementById('display').innerText += '1';
    });

    document.getElementById('two').addEventListener('click', () => {
        document.getElementById('display').innerText += '2';
    });

    document.getElementById('three').addEventListener('click', () => {
        document.getElementById('display').innerText += '3';
    });

    document.getElementById('add').addEventListener('click', () => {
        document.getElementById('display').innerText += '+';
    });

    document.getElementById('subtract').addEventListener('click', () => {
        document.getElementById('display').innerText += '-';
    });

    document.getElementById('zero').addEventListener('click', () => {
        document.getElementById('display').innerText += '0';
    });

    document.getElementById('decimal').addEventListener('click', () => {
        document.getElementById('display').innerText += '.';
    });

    document.getElementById('exp').addEventListener('click', () => {
        alert("Function Not enabled");
    });

    document.getElementById('percent').addEventListener('click', () => {
        document.getElementById('display').innerText += '%';
    });

    document.getElementById('equals').addEventListener('click', equals_fn);
}
