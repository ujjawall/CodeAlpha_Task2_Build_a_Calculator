document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');

    let currentInput = '';
    let operator = null;
    let operand1 = null;
    let operand2 = null;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');

            if (value === 'C') {
                clearDisplay();
            } else if (value === '=') {
                calculateResult();
            } else if (['+', '-', '*', '/'].includes(value)) {
                setOperator(value);
            } else {
                appendToDisplay(value);
            }
        });
    });

    function clearDisplay() {
        currentInput = '';
        operator = null;
        operand1 = null;
        operand2 = null;
        display.value = '';
    }

    function appendToDisplay(value) {
        currentInput += value;
        display.value = currentInput;
    }

    function setOperator(op) {
        if (currentInput === '') return;

        operand1 = parseFloat(currentInput);
        operator = op;
        currentInput = '';
    }

    function calculateResult() {
        if (currentInput === '' || operator === null) return;

        operand2 = parseFloat(currentInput);
        let result = 0;

        switch (operator) {
            case '+':
                result = operand1 + operand2;
                break;
            case '-':
                result = operand1 - operand2;
                break;
            case '*':
                result = operand1 * operand2;
                break;
            case '/':
                result = operand1 / operand2;
                break;
        }

        display.value = result;
        currentInput = result.toString();
        operator = null;
        operand1 = null;
        operand2 = null;
    }
});
