document.addEventListener('DOMContentLoaded', function() {
    const tempForm = document.getElementById('tempForm');
    const resultDiv = document.getElementById('result');

    tempForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const celsiusInput = document.getElementById('celsius');
        // const fahrenheitInput = document.getElementById('fahrenheit');

        const celsius = parseFloat(celsiusInput.value);
        // const fahrenheit = parseFloat(fahrenheitInput.value);

        if (isNaN(celsius)) {
            resultDiv.textContent = 'Please enter valid temperatures.';
            return;
        }

        resultDiv.textContent = ''; 

        const fahrenheitResult = (celsius * 9/5) + 32;
        resultDiv.textContent += `Celsius to Fahrenheit: ${fahrenheitResult.toFixed(2)}°F`;

        // const celsiusResult = (fahrenheit - 32) * 5/9;
        // resultDiv.textContent += ` | Fahrenheit to Celsius: ${celsiusResult.toFixed(2)}°C`;
    });
});