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
        console.log(button.innerText)
        let number = button.innerText;
        appendNumber(number)
    })
} 
);

function appendNumber(number) {
    if (number === '.' && currentValue.includes('.')) return
    currentValue += number;
    calculatorValue.innerHTML = currentValue ;
    console.log(currentValue)
}

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log(button.innerText)
        let operator = button.innerText;
        console.log(previousValue)
        console.log(currentValue)

        switch(operator) {
            case '+':
            previousValue = currentValue;
            calculator.push(previousValue)
            calculatorValue.innerHTML = operator;
            calculator.push(operator);
            currentValue = '';
            console.log(calculator);
            break
            case '-':
            previousValue = currentValue;
            calculator.push(previousValue)
            calculatorValue.innerHTML = operator;
            calculator.push(operator);
            currentValue = '';
            console.log(calculator);
            break
            case '/':
            previousValue = currentValue;
            calculator.push(previousValue)
            calculatorValue.innerHTML = operator;
            calculator.push(operator);
            currentValue = '';
            console.log(calculator);
            break
            case '*':
            previousValue = currentValue;
            calculator.push(previousValue)
            calculatorValue.innerHTML = operator;
            calculator.push(operator);
            currentValue = '';
            console.log(calculator);
            break
        }
    })
} 
);

equalsButton.addEventListener('click', button => {
    console.log(calculator);
    calculator.push(currentValue)
    let calculate = eval(calculator.join(''));
    console.log(calculate);
    calculatorValue.innerHTML = calculate;
    currentValue = '';
    calculator = [];
})

deleteButton.addEventListener('click', button => {
    console.log(currentValue);
    currentValue = currentValue.slice(0, -1);
    calculatorValue.innerHTML = currentValue;
    if (currentValue === ''){
        console.log('empty')
        calculatorValue.innerHTML = 0;
    }
    console.log(currentValue);
})

resetButton.addEventListener('click', button => {
    previousValue = '';
    currentValue = '';
    calculator = [];
    calculatorValue.innerHTML = '0000';
    console.log(currentValue);
    console.log(previousValue);
    console.log(calculator);
})