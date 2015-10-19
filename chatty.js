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
 
var triggerMove = document.getElementById("clear-text");
triggerMove.addEventListener("click", clearAllText);
