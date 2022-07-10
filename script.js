function add(a,b) {
    return a + b;
};

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    if (b === 0){
        return(
            'I\'m sorry Dave, I\'m afraid I can\'t do that.'
        )
    }
    return a / b;
}

function operate(a, operator, b){
    if (operator === '+'){
        return add(a,b);
    } else if (operator === '-'){
        return subtract(a,b);
    } else if (operator === '*'){
        return multiply(a,b);
    } else if (operator === '/'){
        return divide(a,b);
    } else if (operator === '='){
        return 'error';
    }
}

let display = document.querySelector('#display');

const buttons = document.querySelectorAll('button');
const digits = ['0','1','2','3','4','5','6','7','8','9','.'];
const operators = ['+','-','*','/','=']
let firstNum = '';
let secondNum = '';
let sign = '';
let tempSign = '';
let lastSign = '';

 for (btn of buttons){
    btn.addEventListener('click', (e) => {
        if (e.target.innerHTML === 'CLEAR'){
            display.innerHTML = ''
            firstNum = ''
            secondNum = ''
            sign = ''
            tempSign = ''
        } else if(digits.includes(e.target.innerHTML)){
            display.innerHTML += e.target.innerHTML
            if (operators.includes(tempSign)){
                display.innerHTML = ''
                display.innerHTML += e.target.innerHTML
                tempSign = 'pressed at least once'
            }
        } else if (operators.includes(e.target.innerHTML)){
            if(tempSign === 'pressed at least once'){
                if(sign === '=' && secondNum != ''){
                    firstNum = display.innerHTML
                    console.log(lastSign)
                    display.innerHTML = operate(parseFloat(firstNum), lastSign, parseFloat(secondNum))
                } 
                secondNum = display.innerHTML
                display.innerHTML = operate(parseFloat(firstNum), sign, parseFloat(secondNum))
                firstNum = display.innerHTML
                tempSign = sign
                sign = e.target.innerHTML
            } else {
                firstNum = display.innerHTML;
                sign = e.target.innerHTML;
                tempSign = sign;
                lastSign = sign
            }
        }
    })
}

function resetDisplay(){
    if (display.innerHTML != ''){
        display.innerHTML
    }
}





