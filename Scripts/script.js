//JAVIER GARCÍA
// https://github.com/Javigarciagr7/CalculadoraWindows10.git

function addToDisplay(value) {
    const display = document.getElementById('display');
    const currentValue = display.value;

    if (value === '⌫') {
        display.value = currentValue.slice(0, -1);
    } else if (value === 'CE') {
        display.value = '';
    } else if (value === '%') {
        try {
            const result = eval(currentValue) / 100;
            display.value = result;
        } catch (error) {
            display.value = 'Error';
        }
    } else if (value === '+/-') {
        try {
            const result = -eval(currentValue);
            display.value = result;
        } catch (error) {
            display.value = 'Error';
        }
    } else if (value === 'x') {
        display.value += '*';
    } else if (value === '1/x') {
        try {
            const result = 1 / eval(currentValue);
            display.value = result;
        } catch (error) {
            display.value = 'Error';
        }
    } else if (value === 'x²') {
        try {
            const result = Math.pow(eval(currentValue), 2);
            display.value = result;
        } catch (error) {
            display.value = 'Error';
        }
    } else if (value === '√') {
        try {
            const result = Math.sqrt(eval(currentValue));
            display.value = result;
        } catch (error) {
            display.value = 'Error';
        }
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}