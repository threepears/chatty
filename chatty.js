
// Dark 
function toDark () {
 	document.getElementById("main").classList.toggle("dark");
  document.getElementById("mainheader").classList.toggle("dark");
  document.getElementById("innercontain").classList.toggle("dark");
  document.getElementById("message").classList.toggle("dark");
  document.getElementById("submit-input").classList.toggle("dark");
  document.getElementById("text-box").classList.toggle("dark");
  document.getElementById("clear-box").classList.toggle("dark");
  var buttonz = document.getElementsByClassName("button");
  for (i = 0; i < buttonz.length; i++) {
    buttonz[i].classList.toggle("dark");
  }
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

var numberEntries = [];

function noMoreText () {
if (numberEntries.length > 20) {
	console.log(numberEntries.length);
	document.getElementById("submit-input").disabled = true;
	document.getElementById("submit-input").classList.add("disable");
	}
}

//moves text from input to display box
function moveIntoBox (clickEvent) {
  var theDate = new Date();
  var theMonth = theDate.getMonth();
  var theDay = theDate.getDate();
  var theYear = theDate.getFullYear();
  var theHour = theDate.getHours();
  var theMinute = theDate.getMinutes();
  console.log(theYear);
  var timeStamp = " (" + (theMonth + 1) + "/" + theDay + "/" + theYear  + ", " + theHour + ":" + theMinute + ")";
  var field = document.getElementById("field-input");
  var fieldInput = document.getElementById("field-input").value;
  var content = document.getElementById("text-box");
  var textBox = "<p class ='entry'>" + fieldInput + timeStamp + "<button class ='button' id ='deletor' type='button' target = 'delete' text='Delete'>Delete</button></p>";  
  numberEntries.push(textBox);
  console.log("function next");
  noMoreText();
  content.innerHTML = textBox + content.innerHTML;
  console.log(fieldInput);
  field.value = " ";
  console.log(fieldInput);
}


function deleteIt () {
if (event.target.id === "deletor") {
  var checker = event.target.parentNode;
  console.log(checker);
  event.target.parentNode.remove();
  numberEntries.pop();
  document.getElementById("submit-input").disabled = false;
  document.getElementById("submit-input").classList.remove("disable");
    } 
    noMoreText();
  }

function clearAllText(){
var content = document.getElementById("text-box");
content.innerHTML = "";  
}


var triggerMove = document.getElementById("submit-input");
triggerMove.addEventListener("click", moveIntoBox);

var clearEntry = document.querySelector("body");
clearEntry.addEventListener("click", deleteIt);
 
var triggerMove = document.getElementById("clear-box");
triggerMove.addEventListener("click", clearAllText);



