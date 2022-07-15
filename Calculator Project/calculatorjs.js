var operand1 = 0;
var operand2 = null;
var operator = null;

var buttons = document.getElementsByClassName("button");
var display = document.getElementById("display");

function isOperator(val) {
    return val == "-" || val == "+" || val == "*" || val == "/";
}

function calculation() {
    var val = this.getAttribute('data-value');
    var text = display.textContent.trim();

    if(isOperator(val)) {
        operand1 = parseFloat(text);
        operator = val;
        display.textContent = "";
    } else if(val == "ac") {
        operand1 = 0;
        operand2 = null;
        operator = null;
        display.textContent = "";
    } else if(val == "sign") {
        operand1 = parseFloat(text);
        operand1 *= -1;
        display.textContent = operand1;
    } else if(val == "%") {
        operand1 = parseFloat(text);
        operand1 /= 100;
        display.textContent = operand1;
    } else if(val == "=") {
        operand2 = parseFloat(text);
        var result = eval(operand1 + ' ' + operator + ' ' + operand2);
        if(result == "Infinity") {
            display.textContent = "Error";
        }
        if(result) {
            display.textContent = result;
            operand1 = 0, operand2 = null, operator = null;
        } else {
            display.textContent = "";
        }
    } else if(val == ".") {
        operand1 = parseFloat(text);
        operand1 /= 10;
        display.textContent = operand1;
    } else {
        display.textContent += val;
    }
}

for(var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', calculation);
}