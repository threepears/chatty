
// Dark 
function toDark () {
 	document.getElementById("main").classList.toggle("dark");
};
var dark = document.getElementById("dark");
dark.addEventListener("click",toDark);


// Large Text
function toLarge () {
 	document.getElementById("main").classList.toggle("large");
};
var large = document.getElementById("large");
large.addEventListener("click",toLarge);

// Clear button
function toClear() {
	document.getElementById("text-box").value = "";
};
var clear = document.getElementById("clear-box")
clear.addEventListener("click", toClear);

// Enter
document.addEventListener("keyup", function (e) {
    var key = e.which || e.keyCode;
    	if (key === 13) {
            document.getElementById("submit-input").click();
        }
});



function moveIntoBox (clickEvent  ){
  
  var fieldInput = document.getElementById("field-input").value;
  var content = document.getElementById("text-box");
  var textBox = "<p class ='entry'>" + fieldInput + "<button class ='button' id ='deletor' type='button' target = 'delete' text='Delete'>Delete</button></p><br>";  
    content.innerHTML = textBox + content.innerHTML;
}
function deleteIt () {
if (event.target.id === "deletor") {
  var checker = event.target.parentNode;
  console.log(checker);
  event.target.parentNode.remove();
    }
  }

function clearAllText(){
content.innerHTML = "";  
}


var triggerMove = document.getElementById("submit-input");
triggerMove.addEventListener("click", moveIntoBox);

var clearEntry = document.querySelector("body");
clearEntry.addEventListener("click", deleteIt);
 
var triggerMove = document.getElementById("clear-box");
triggerMove.addEventListener("click", clearAllText);
>>>>>>> dea3e1ac9423487d236b7cd6df7bd67480cd4e58
