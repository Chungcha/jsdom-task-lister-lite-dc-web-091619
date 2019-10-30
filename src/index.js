document.addEventListener("DOMContentLoaded", () => {
  // document.getElementById("create-task-form").addEventListener("submit", createToDo) //adding the event listner to the form so not only does it listen to the form so you can also press enter to submit the form.

  const form = document.getElementById("create-task-form")
  form.addEventListener("submit", createToDo)



});

function createToDo(event){
  event.preventDefault()
  // let description = event.target[0].value  this isn't the most readable code to anyone else.  Also if we want to add more input fields in the future, its best practice not to grab it from it's position.
  let description = document.querySelector("#new-task-description").value //by the time the event goes through you have a value in the input.
  let item = document.createElement("li")
  let button  = document.createElement("button")
  button.innerText = "AHHH DON'T DELETE ME"
  let list = document.getElementById("tasks")
  list.appendChild(item).innerText = description
  item.append(button)
  // let buttonsArr = document.querySelectorAll("button") //don't need to add an array, as each button makes it's own even listener, and the math is done in the callback function.
//   buttonsArr.forEach(function(button){
//     button.addEventListener("click", removeItem)  //don't need a forEach as there are no buttons on the page to begin with.  Can just add with one button.
// }
  button.addEventListener("click", removeItem)
  const priority = document.getElementById("new-task-priority").value
  item.style.color = priority
  document.getElementById("create-task-form").reset(); //this resets everything, if i'm pulling values from inputs, make sure this is after I pull everything.
}

function removeItem(event){
  event.target.parentElement.remove()
}

