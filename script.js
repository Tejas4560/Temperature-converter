function convertToFahrenheit() {
    const celsius = document.getElementById('celsius').value;
    const fahrenheit = (celsius * 9/5) + 32;
    document.getElementById('fahrenheit').value = fahrenheit.toFixed(2);
    
    // Flash input background on conversion
    flashInput(document.getElementById('fahrenheit'));
}

function convertToCelsius() {
    const fahrenheit = document.getElementById('fahrenheit').value;
    const celsius = (fahrenheit - 32) * 5/9;
    document.getElementById('celsius').value = celsius.toFixed(2);
    
    // Flash input background on conversion
    flashInput(document.getElementById('celsius'));
}

function flashInput(element) {
    element.style.transition = 'background-color 0.5s ease';
    element.style.backgroundColor = '#D1E7FF'; // Light blue
    setTimeout(() => {
        element.style.backgroundColor = '#FFFFFF'; // Back to white
    }, 500);
}
