var currentNum = '';
var currentOp = '';

const numberBtn = document.querySelectorAll('.num');
const equals = document.getElementById('equals');
const currentDisplay = document.getElementById('display-entered');
const operandBtn = document.querySelectorAll('.operand');
const clearBtn = document.getElementById("clear");
const deleteBtn = document.getElementById("delete");

numberBtn.forEach((button) =>
button.addEventListener('click', () => {
    displayOperand(button.textContent);
    currentNum = button.textContent})
)

operandBtn.forEach((button) =>
button.addEventListener('click', () => {
    displayOperand(button.textContent);
    currentOp = button.textContent})
);

clearBtn.addEventListener('click', resetScreen)

function displayNum(number){
    currentDisplay.textContent === '0' ? 
    currentDisplay.textContent += number:
    resetScreen ;
}

function displayOperand(operand){
    currentDisplay.textContent += operand;
}
 
function resetScreen(){
    currentDisplay.textContent = '0';
}

console.log(currentNum)
console.log(currentOp)

function evaluate() {

}


function operate(operator,a, b){

    if (operator === '+'){
        add(a, b);
    }
    else if(operator ==='-'){
        subtract(a, b);
    }
    else if(operator === '*'){
        multiply(a, b);
    }
    else if(operator === '/'){
        divide(a, b);
    }
}

function add(a, b){
    return a+b;
}

function subtract(a, b){
    return a-b;
}

function multiply(a, b){
    return a*b;
}

function divide(a, b){
    return a/b;
}
