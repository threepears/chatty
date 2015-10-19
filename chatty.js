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



