//  Raj Patel 
//  Project 4
//  Due Date: May  31, 2022

var contents;

// This function that allows to upload the json file
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

// This function would determine the answer to be correct or incorrect based on what the user has selected from the asnwer choices
function IndianTest()          
{  
    var numbercorrect = 0; var numberincorrect = 0;
    var quizArray = JSON.parse(contents);
    for(let i = 1; i <= 5; i++) {
        var isCorrect = false;
        for(let j = 1; j <= 3; j++) {
            var rb = document.getElementById("" + i + j);
            if (rb.checked && rb.value == quizArray[i].answer) {
                numbercorrect++;
                isCorrect = true;
            }
        }
        var imageTag = document.getElementById("img" + i);
        if(isCorrect){
            imageTag.src = "Tick.jpg";
        }
        else {
            numberincorrect++;
            imageTag.src = "Cross.jpg";
        }
    }

    // Lines that would display total number of correct and incorrect answers once the quiz is submitted
    document.getElementById("numbercorrect").innerHTML = "Correct number of questions: " + numbercorrect;
    document.getElementById("numberincorrect").innerHTML = "Incorrect number of questions: " + numberincorrect;
}    

// This function would allow for the hints to be in the questions 
function showAnswer(event) {
    var spanTag = event.target;
    var answerId = "a" + spanTag.id.charAt(1);
    var answer = document.getElementById(answerId);
    answer.style.display = "block"
}

// This function init would enable the user to view the hints by clicking each question if needed and also the submit button to be clicked when the quiz is completed

function init( ) {

    var span1 = document.getElementById("r1");
    span1.addEventListener("click", showAnswer);

    var span2 = document.getElementById("r2");
    span2.addEventListener("click", showAnswer);

    var span3 = document.getElementById("r3");
    span3.addEventListener("click", showAnswer);

    var span4 = document.getElementById("r4");
    span4.addEventListener("click", showAnswer);

    var span5 = document.getElementById("r5");
    span5.addEventListener("click", showAnswer);



    // The event handler for upload file function
    document.getElementById("file").
        addEventListener("change", readSingleFile, 
            false);

    // The event handler for button to be clicked for the IndianTest function 
    var button = document.getElementById("btn");
    button.addEventListener("click", IndianTest);
}
       
// The event handler to perform load the page upon init
window.addEventListener("load", init);