// Raj Patel
// Project 3
// Due Date: May 8, 2022


// Function for the Draw Lotto Balls 

function rollLotto( ) {
    var lg = new Lotto(30, 5);
    lg.selectBalls( );
    for(let i = 1; i <= 5; i++) {
      let imgLocation = i.valueOf( );
      let imgNum = lg.getBall(i);
      let image = document.getElementById(imgLocation);
      let pathName = "balls/" + imgNum + ".gif";
      image.src = pathName;
  }
  }
  
  
  
  // Function init rollLotto 
  
  function init( ) {
    let btn = document.getElementById("btn");
    btn.addEventListener("click", rollLotto);
  
  }
  
  //event listner initialized on page load 
  window.addEventListener("load", init);