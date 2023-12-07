  // Raj Patel 
  //   Project 2a
  // Submission Date: April 28, 2022

// js file for Practice Problem that inputs
// city, ctry/subctry then outputs
// the city, stry/subctrycfor all the areas that
// match the criteria including both parts 

// Event handler for button
function getCityInfo( ) {

    // Get country from input textfield.
    var country = 
        document.getElementById("txt_country").value;
  
    // Get subcountry from input textfield.
    var subcountry = 
        document.getElementById("txt_subcountry").
            value;
  
    // Set up paragraph object for output
    var pCityInfo = document.getElementById("p_city_info");

    // Obtain city info from database
  var citiesArray = JSON.parse(data);
  var output = "";
  for (ctry of citiesArray) {
      var c = ctry.country;
      var s = ctry.subcountry;
      var d = ctry.name;
      if (country == c && subcountry == s) {
          output += `${d}<br>`;
      }
  }
  pCityInfo.innerHTML = "City Info:<br>" + output;
}
// Event handler for button
function getSubCtryInfo( ) {

    // Get city from input textfield.
var city =
document.getElementById("txt_city").value;

  // Set up paragraph object for output
var psubctryinfo = document.getElementById("p_subctry_info");

// Obtain country/subctry info from database
var SubctryArray = JSON.parse(data);
var output = "";

for (var cty of SubctryArray) {
  var g = cty.country;
  var h = cty.subcountry;
  var i = cty.name;
  if (city == i) {
      output += `${g}, ${h}<br>`;
  }
}
psubctryinfo.innerHTML = "subctry Info:<br>" + output;

}

// init method to attach the event listener to the button
function init( ) {

  var button = document.getElementById("btn_city_info");
  button.addEventListener("click", getCityInfo);

  var button = document.getElementById("btn_subctry_info");
  button.addEventListener("click", getSubCtryInfo);
}

// Run the init method after the HTML page loads.
window.addEventListener("load", init);