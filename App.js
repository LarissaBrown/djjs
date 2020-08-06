//Blue when the mouse hovers over the square

document.getElementById("square").addEventListener("mouseover", hoverSquare);

function hoverSquare() {
    
    this.style.backgroundColor = "blue";

}



//Red when the mouse button is held down over the square

document.getElementById("square").addEventListener("mousedown", downSquare);

function downSquare() {
    
    this.style.backgroundColor = "red";

}

//Yellow when the mouse button is let go over the square

document.getElementById("square").addEventListener("mouseup", upSquare);

function upSquare() {
    
    this.style.backgroundColor = "yellow";

}


//Green when the mouse is double clicked in the square

document.getElementById("square").addEventListener("dblclick", dblSquare);

function dblSquare() {
    
    this.style.backgroundColor = "green";

}

//Orange when the mouse scroll is used somewhere in the window (not just over the square).
document.getElementById("body").addEventListener("wheel", scrollSquare);

function scrollSquare() {
    
    document.getElementById("square").style.backgroundColor = "orange";

}
//You should also ba able to press the first letter of the colors and have the box change to that color. 

document.addEventListener('keydown', colorWords); 
const square = document.getElementById("square");

function colorWords(event) {
    if (event.code == 'KeyB') {

        square.style.backgroundColor = "blue"
    }
    else if (event.code == 'KeyR') {
        square.style.backgroundColor = "red"
        
    }
    else if (event.code == 'KeyG') {
        square.style.backgroundColor = "green"
    }
    else if (event.code == 'KeyY') {
        square.style.backgroundColor = "yellow"
    }
  else if (event.code == "KeyO") {
    square.style.backgroundColor = "orange"
    }
  
}