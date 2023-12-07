//  Raj Patel  
//  Project 5
//  Due Date: June 07, 2022


// This fuction validates that the required fields are correctly filled in before submitting the form
function Validationform(ev) {
            
    // Getting field values from ID.
    var name = document.getElementById("Username").value;
    var age = document.getElementById("Age").value;


    // Validating required fields.
    var NameCheck = (name != "");
    var AgeCheck = /^\d{1,2}$/.test(age);
            
    // Get objects for error messages.
    var NameErr = document.getElementById("Namee");
    var AgeErr = document.getElementById("Agee");

    // Display error messages if needed. Use Elvis operators.
    NameErr.style.display = NameCheck ? "none" : "block";
    AgeErr.style.display = AgeCheck ? "none" : "block";
                
    // This would Submit the form if it passes all checks.
    if (NameCheck && AgeCheck) {
        // allowing to complete form submission
    }
    else {
        ev.preventDefault( );
    }
}

// This would keep the optional special code text filed unless clicked upon to input the friend's refferal code
function DisplayAnswer(event) {
    var spanTag = event.target;
    var anwsrId = "a" + spanTag.id.charAt(1);
    var answer = document.getElementById(anwsrId);
    answer.style.display = "block"
}

// This funtion validates the fields to be fully and correctly filled in with the valid format or else display error messages and also hides the optional referral code textfield
function init( ) {

    var formTag = document.getElementById("form1");
    formTag.onsubmit = Validationform;

    var span1 = document.getElementById("r1");
    span1.addEventListener("click", DisplayAnswer);
};

// This performs the load upon the init
window.addEventListener("load", init);