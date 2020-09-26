//maths (using and returning numbers)
function add(alpha,omega) {
    return alpha+omega;
}
function subtract(alpha,omega) {
    return alpha-omega;
}
function multiply(alpha,omega) {
    return alpha*omega;
}
function divide(alpha,omega) {
    return alpha/omega;
}

//global variables, initialised (strings)
let operator = '';
let a = '';
let b = '';
let display = document.querySelector('#display');
display.textContent = '0';

//operate (returns a number)
function operate(op,x,y) {
    if (op==='add') {
        return add(parseInt(x),parseInt(y));
    } else if (op==='subtract') {
        return subtract(parseInt(x),parseInt(y));
    } else if (op==='multiply') {
        return multiply(parseInt(x),parseInt(y));
    } else if (op==='divide') {
        return divide(parseInt(x),parseInt(y));
    } else display.textContent = a;
}

//click number
let numbers = document.querySelectorAll('.number')
numbers.forEach(btn => btn.addEventListener('click', clickNumber));
function clickNumber(e) {
    if (operator === '') {
        a += e.target.textContent;
        display.textContent = a;
    } else {
        b += e.target.textContent;
        display.textContent = b;
    }
}

//click operator
let operators = document.querySelectorAll('.operator');
operators.forEach(btn => btn.addEventListener('click', clickOperator));
function clickOperator(e) {
    if (b !== '') { // if this is an additional operation
        let answer = operate(operator,a,b);
        a = answer.toString();
        b = '';
        display.textContent = a;
    }
    operator = e.target.getAttribute('id');
}

//click equal
document.querySelector('#equals').addEventListener('click', performEqual);
function performEqual() {
    if (a === '') {
        return;  
    } else if (b === '') {
        display.textContent = a;
    } else {
        let answer = operate(operator,a,b); // a number
        display.textContent = answer.toString();
    }
}

//click clear
document.querySelector('#clear').addEventListener('click', () => clear());
function clear() {
    a = '';
    b = '';
    display.textContent = '0';
    operator = '';
}