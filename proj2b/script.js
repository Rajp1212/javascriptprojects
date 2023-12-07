//  Raj Patel  
//  Project 2b
//  Submission Date: May 17, 2022

// function for the reading the uploaded file
function readSingleFile(event) {

    // Obtain the single uploaded file.
    var f = event.target.files[0]; 

    if (f) {
        var r = new FileReader( );
        r.onload = function(e) { 
            contents = e.target.result;
        }
        r.readAsText(f);
    }
    else { 
        alert("Failed to load file");
    }
}

// function for getting the city info after the country/subcountry is entered

function getSubCtryInfo( ) {

    var searchArray = JSON.parse(contents);

    var requestedCountry = document.getElementById('txt_country').value;

    var requestedSubcountry = document.getElementById("txt_subcountry").value;

    var output1 = document.getElementById("output1");

    var display = "";

    for (let obj of searchArray) {
        var c = obj.country;
        var a = obj.subcountry;
        var n = obj.name;
        if (c == requestedCountry && a == requestedSubcountry ) {
            display += `${n}\n`;
        }
    }

    output1.value = display;
}


// function for the getting the country/subcountry info after the city is entered
function getcityinfo( ) {

    var searchArray = JSON.parse(contents);

    var requestedCity = document.getElementById('txt_city').value;

    var output2 = document.getElementById("output2");

    var display2 = "";

    for (let abc of searchArray) {
        var c = abc.country;
        var a = abc.subcountry;
        var n = abc.name;
        if (n == requestedCity) {
            display2 += `${c} ${a}\n`;
        }
    }

    output2.value = display2;
}

// function init for the event handlers
function init( ) {

    // Upload file synchronously.
    document.getElementById("file").
        addEventListener("change", readSingleFile, 
            false);

            // var button to be clicked for get city info
      var button1 = document.getElementById("btn_city_info");
      button1.addEventListener("click", getSubCtryInfo);
        
            // var button to be clicked for get country/subcountry info
      var button2 = document.getElementById("btn_subctry_info");
      button2.addEventListener("click", getcityinfo);
}

// window reload upon the init 
window.addEventListener("load", init);