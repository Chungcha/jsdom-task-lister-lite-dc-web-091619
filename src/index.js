document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("create-task-form").addEventListener("submit", createToDo)
});



function createToDo(event){
  event.preventDefault()
  let description = event.target[0].value
  let item = document.createElement("li")
  let button  = document.createElement("button")
  let list = document.getElementById("tasks")
  list.appendChild(item).innerText = description
  item.append(button)
  document.getElementById("create-task-form").reset();
  let buttonsArr = document.querySelectorAll("button")
  buttonsArr.forEach(function(button){
    button.addEventListener("click", removeItem)  //is there a scope to this?
  })
}



function removeItem(event){
  event.target.parentElement.remove()
}

