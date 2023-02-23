

const numberBtn = document.querySelectorAll('.num');
const equals = document.getElementById('equals');
const currentOp = document.getElementById('display-entered');
const operandBtn = document.querySelectorAll('.operand');
const clearBtn = document.getElementById("clear");
const deleteBtn = document.getElementById("delete")

numberBtn.forEach((button) =>
button.addEventListener('click', () => displayNum(button.textContent))
)

operandBtn.forEach((button) =>
button.addEventListener('click', () => displayOperand(button.textContent))
)

clearBtn.addEventListener('click', resetScreen)

function displayNum(number){
    currentOp.textContent === '0' ? 
    currentOp.textContent += number:
    resetScreen ;
}

function displayOperand(operand){
    currentOp.textContent += operand;
}
 
function resetScreen(){
    currentOp.textContent = '';
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
