let calculatorValue = document.getElementById('calculator-value');
let numberButtons = document.querySelectorAll('.number-btn');
let operatorButtons = document.querySelectorAll('.operator-btn');
let equalsButton = document.querySelector('.equals-btn-color');
let deleteButton = document.querySelector('.delete-btn');
let resetButton = document.querySelector('.reset-btn');

let previousValue = '';
let currentValue = '';
let calculator = []

if (currentValue < 0 || currentValue === 0 ) {
    currentValue = 0;
    calculatorValue.innerHTML = currentValue;
}

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        let number = button.innerText;
        appendNumber(number)
    })
} 
);

function appendNumber(number) {
    if (number === '.' && currentValue.includes('.')) return
    currentValue += number;
    calculatorValue.innerHTML = currentValue ;
}

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        let operator = button.innerText;

        switch(operator) {
            case '+':
            previousValue = currentValue;
            calculator.push(previousValue)
            calculatorValue.innerHTML = operator;
            calculator.push(operator);
            currentValue = '';
            break
            case '-':
            previousValue = currentValue;
            calculator.push(previousValue)
            calculatorValue.innerHTML = operator;
            calculator.push(operator);
            currentValue = '';
            break
            case '/':
            previousValue = currentValue;
            calculator.push(previousValue)
            calculatorValue.innerHTML = operator;
            calculator.push(operator);
            currentValue = '';
            break
            case '*':
            previousValue = currentValue;
            calculator.push(previousValue)
            calculatorValue.innerHTML = operator;
            calculator.push(operator);
            currentValue = '';
            break
        }
    })
} 
);

equalsButton.addEventListener('click', button => {
    calculator.push(currentValue)
    let calculate = eval(calculator.join(''));
    calculatorValue.innerHTML = calculate;
    currentValue = '';
    calculator = [];
})

deleteButton.addEventListener('click', button => {
    currentValue = currentValue.slice(0, -1);
    calculatorValue.innerHTML = currentValue;
    if (currentValue === ''){
        console.log('empty')
        calculatorValue.innerHTML = 0;
    }
})

resetButton.addEventListener('click', button => {
    previousValue = '';
    currentValue = '';
    calculator = [];
    calculatorValue.innerHTML = '0000';
})