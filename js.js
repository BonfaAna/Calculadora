function appendToDisplay(value) {
    const display = document.getElementById('resultado');
    if (display.innerText === '0') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function clearDisplay() {
    document.getElementById('resultado').innerText = '0';
}

function deleteLast() {
    const display = document.getElementById('resultado');
    display.innerText = display.innerText.slice(0, -1);
    if (display.innerText === '') {
        display.innerText = '0';
    }
}

function calculateResult() {
    const display = document.getElementById('resultado');
    try {
        display.innerText = eval(display.innerText.replace(/x/g, '*'));
    } catch {
        display.innerText = 'Erro';
    }
}
