

function moveIntoBox (clickEvent  ){
  var fieldInput = document.getElementById("field-input").value;
  console.log(fieldInput);
  var textBox = document.getElementById("text-box");
  console.log(textBox);
  // var oldtextbox = textBox;
  textBox.innerHTML = "<p class ='entry'>" + fieldInput + "<button class ='button' id ='deletor' type='button' target = 'delete' text='Delete'>Delete</button></p><br>" + textBox.innerHTML;  
  console.log(textBox);
  
}
  // document.querySelector("body").addEventListener("click", function(event)
  // {console.log(event);
    // if (event.target.value === "delete") {
    // textBox.innerHTML = oldtextbox;
    // }
    // else {
    //   // textBox.innerHTML = textBox;
    // }
  // });
// }


var triggerMove = document.getElementById("submit-input");
triggerMove.addEventListener("click", moveIntoBox);


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
