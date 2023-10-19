var display = document.getElementById('display-container');
var buttons = document.getElementsByClassName('button');
var operand1 = 0;
var operand2 =  null;
var operator = null;

function isOperator(operator) {
    return (operator == "+" || operator == "*" || operator == "/" || operator == "-");
}

for(var button = 0; button < buttons.length; button++) {
    buttons[button].addEventListener('click', function() {
        var currValue = this.getAttribute('data-value');
        var text = display.textContent.trim();
        if(isOperator(currValue)) {
            operand1 = parseFloat(text);
            operator = currValue;
            display.textContent = "";
        } else if(currValue == "ac") {
            operand1 = 0;
            operator = null;
            operand2 = null;
            display.textContent = "";
        } else if(currValue == "sign") {
            display.textContent *= (-1);
        } else if(currValue == "%") {
            var result = parseFloat(text) / 100;
            if(result) display.textContent = result;
            else alert("Please enter a number!");
        } else if(currValue == "=") {
            operand2 = parseFloat(display.textContent);
            var result = eval(operand1 + operator + operand2);
            if(result === Infinity) display.textContent = "Error";
            else if(result) display.textContent = result;
            else alert("Invalid Input!");

            operand1 = 0;
            operand2 = null;
            operator = null;
        } else {
            display.textContent += currValue;
        }
    });
}