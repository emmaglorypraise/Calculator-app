let calculatorValue = document.getElementById('calculator-value');
let buttonValue = document.querySelectorAll('.number-btn').forEach(btn => btn.addEventListener('click', () => {
    console.log(buttonValue.value)
}));

// buttonValue.addEventListener('click', getValue) 

// function getValue() {
//     console.log(buttonValue)
// }