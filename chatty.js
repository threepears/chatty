$(document).ready(function() {
  // All the JavaScript that depends on jQuery will be written here

// Dark 
function toDark () {
 	$("#main").toggleClass("dark");
  $("#mainheader").toggleClass("dark");
  $("#innercontain").toggleClass("dark");
  $("#message").toggleClass("dark");
  $("#submit-input").toggleClass("dark");
  $("#text-box").toggleClass("dark");
  $("#clear-box").toggleClass("dark");
  var buttonz = $(".button");
  for (i = 0; i < buttonz.length; i++) {
    buttonz[i].toggleClass("dark");
  }
};

$("#dark").click(toDark);


// Large Text
function toLarge () {
 	$("#main").toggleClass("large");
};

$("#large").click(toLarge);

// Clear button
function toClear() {
	$("#text-box").val("");
};

$("#clear-box").click(toClear);

// Enter
$(document).keyup(function (e) {
    var key = e.which || e.keyCode;
    	if (key === 13) {
        $("#submit-input").click();
      }
});

var numberEntries = [];

function noMoreText () {
if (numberEntries.length > 20) {
	console.log(numberEntries.length);
	$("#submit-input").prop("disabled", true);
	$("#submit-input").addClass("disable");
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
  var field = $("#field-input");
  var fieldInput = $("#field-input").val();
  var textBox = "<p class ='entry'><span>" + fieldInput + "</span>&nbsp;&nbsp;" + timeStamp + "<button class ='button' id ='deletor' type='button' target = 'delete' text='Delete'>Delete</button></p>";  
  numberEntries.push(textBox);
  console.log("function next");
  noMoreText();
  $("#text-box").append(textBox);
  console.log(fieldInput);
  field.val("");
  console.log(fieldInput);
}


function deleteIt () {
if (event.target.id === "deletor") {
  var checker = event.target.parentNode;
  console.log(checker);
  event.target.parentNode.remove();
  numberEntries.pop();
  $("submit-input").prop("disabled", false);
  $("submit-input").removeClass("disable");
    } 
    noMoreText();
  }

function clearAllText(){
  $("#text-box").html("");  
}


$("#submit-input").click(moveIntoBox);

$("body").click(deleteIt);
 
$("#clear-box").click(clearAllText)

});


