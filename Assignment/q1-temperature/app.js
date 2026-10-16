// Name: Ahmad Hussain | Roll No: 2500608

const temperatureInput = document.getElementById("temperature");
const result = document.getElementById("result");

// Converts a Celsius value to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

// Converts a Fahrenheit value to Celsius (arrow function)
const fahrenheitToCelsius = (fahrenheit) => {
    return (fahrenheit - 32) * 5 / 9;
};

// Returns the entered value as a number, or null when it is empty / not a number
function readTemperature() {
    const rawValue = temperatureInput.value.trim();

    if (rawValue === "") {
        showResult("Please enter a temperature.", "error");
        return null;
    }

    const value = Number(rawValue);

    if (Number.isNaN(value)) {
        showResult("Please enter a valid number.", "error");
        return null;
    }

    return value;
}

// Writes the message into the result box with the given style class
function showResult(message, styleClass) {
    result.textContent = message;
    result.className = styleClass;
}

// Converts the entered value from Celsius to Fahrenheit
document.getElementById("toFahrenheit").addEventListener("click", function () {
    const value = readTemperature();

    if (value === null) {
        return;
    }

    const answer = celsiusToFahrenheit(value);
    showResult(`${value} °C = ${answer.toFixed(1)} °F`, "answer");
});

// Converts the entered value from Fahrenheit to Celsius
document.getElementById("toCelsius").addEventListener("click", function () {
    const value = readTemperature();

    if (value === null) {
        return;
    }

    const answer = fahrenheitToCelsius(value);
    showResult(`${value} °F = ${answer.toFixed(1)} °C`, "answer");
});
