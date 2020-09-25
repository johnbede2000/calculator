function add(a,b) {
    return a+b;
}

function subtract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    return a/b;
}

let operator = '';
let a = '';
let b = '';
let display = document.querySelector('#display');
display.textContent = '0';

function operate(operator,a,b) {
    if (operator==='add') {
        display.textContent = add(parseInt(a),parseInt(b));
        a = '';
        b = '';
        operator = '';
    } else if (operator==='subtract') {
        display.textContent = subtract(parseInt(a),parseInt(b));
        a = '';
        b = '';
        operator = '';
    } else if (operator==='multiply') {
        display.textContent = multiply(parseInt(a),parseInt(b));
        a = '';
        b = '';
        operator = '';
    } else if (operator==='divide') {
        display.textContent = divide(parseInt(a),parseInt(b));
        a = '';
        b = '';
        operator = '';
    } else display.textContent = 'Error';
}

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

let operators = document.querySelectorAll('.operator');
operators.forEach(btn => btn.addEventListener('click', (e) => operator = e.target.getAttribute('id')));

document.querySelector('#equals').addEventListener('click', () => operate(operator,a,b))

document.querySelector('#clear').addEventListener('click', () => clear());

function clear() {
    a = '';
    b = '';
    display.textContent = '0';
    operator = '';
}