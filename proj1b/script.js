// Raj Patel
// Project 1a
// Submission Date: April 19, 2022

// The calculation of Celsius to Fahrenheit code in javascript

function celsiustofahrenheit(celsius) {
    var fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

// Function of conversion in Javascript
    function convert( ) {
        var textfield = document.getElementById("c");
        var c2f = celsiustofahrenheit(parseInt(textfield.value));
        var para = document.getElementById("c2f");
        para.innerHTML = "Celsius to Fahrenheit is: " +  c2f;
    }

// Function that processes the button

function init( ) {
    var button = document.getElementById("btn");
    button.addEventListener("click", convert);
}

// Load the page with result
window.addEventListener("load", init);