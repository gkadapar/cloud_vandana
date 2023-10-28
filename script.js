let display = document.getElementById('display');
let currentValue = '';

function appendToDisplay(value) {
    if (currentValue === '0' && value !== '+' && value !== '-' && value !== '*' && value !== '/') {
        currentValue = '';
    }
    currentValue += value;
    display.textContent = currentValue;
    scrollTextLeft();
}

function scrollTextLeft() {
    const displayElement = document.getElementById('display');
    if (displayElement.scrollWidth > displayElement.clientWidth) {
        displayElement.scrollLeft = displayElement.scrollWidth - displayElement.clientWidth;
    }
}

function clearDisplay() {
    currentValue = '';
    display.textContent = '0';
    display.scrollLeft = 0; // Reset scroll position
}

function calculate() {
    try {
        currentValue = eval(currentValue);
        display.textContent = currentValue;
    } catch (error) {
        display.textContent = 'Error';
        currentValue = '';
    }
}
