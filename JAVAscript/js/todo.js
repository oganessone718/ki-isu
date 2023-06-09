const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

let toDos = [];

function saveToDos(){
  localStorage.setItem("toDos",JSON.stringify(toDos));
}

function deleteTodo(event){
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodo){
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌"
  button.addEventListener("click",deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  
  toDoList.append(li);
}

function handleToDoSubmit(event){
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);
const savedToDos = localStorage.getItem("toDos");

if(savedToDos !== null){
  const parsedToDos = JSON.parse(savedToDos);
  toDos = JSON.parse(localStorage.getItem("toDos"));
  parsedToDos.forEach(paintToDo);
}