document.querySelector("body").addEventListener("click", function(event) {
  console.log(event);


function moveintobox (clickEvent){
  var fieldInput = document.getElementById("field-input");
  var content = document.querySelector("body").getElementById("text-box");
  content.innerHTML =+ "<p>" + fieldInput +  <input class ="deletebuttons" type="submit-input>Delete</input>  </p>";


var triggerMove = document.getElementById("submit-input");
triggerMove.addEventListener("click", moveintobox);


  // // Handle the click event on any li
  // if (event.target.tagName.toLowerCase() === "li") {
  //   console.log("You clicked on an <li> element");
  // }

  // // Handle the click event on any DOM element with a certain class
  // if (event.target.className === "article-section") {
  //   console.log("You clicked on an `article-section` element");
  // }

  // // Inspect the `id` property of the event target
  // if (event.target.id === "page-title") {
  //   console.log("You clicked on the page-title element");
  // }
