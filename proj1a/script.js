// Raj Patel
// Project 1a
// Submission Date: April 8, 2022

// The calculation code in javascript

function celsiustofahrenheit(celsius) {
    var fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

var input = prompt("Enter degree in Celsius: ");
document.writeln("Celsius degree entered: " + input);
var fahrenheit = parseFloat(input);
var fahrenheit = celsiustofahrenheit(fahrenheit);
document.writeln("degree Celsius to Fahrenheit is " + fahrenheit);