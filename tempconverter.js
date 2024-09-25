document.getElementById('convertButton').addEventListener('click', function() {
    let temperature = parseFloat(document.getElementById('temperatureInput').value);
    let unit = document.getElementById('unitSelect').value;
    let result;

    if (isNaN(temperature)) {
        document.getElementById('resultArea').textContent = "Please enter a valid number.";
        return;
    }

    if (unit === "Celsius") {
        result = `${(temperature * 9/5) + 32} °F, ${(temperature + 273.15)} K`;
    } else if (unit === "Fahrenheit") {
        result = `${(temperature - 32) * 5/9} °C, ${((temperature - 32) * 5/9) + 273.15} K`;
    } else if (unit === "Kelvin") {
        result = `${temperature - 273.15} °C, ${(temperature - 273.15) * 9/5 + 32} °F`;
    }

    document.getElementById('resultArea').textContent = `Converted Temperature: ${result}`;
});