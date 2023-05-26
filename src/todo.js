const todoForm = document.querySelector("#todoForm");
const todoList = document.querySelector("#todoList");
const todoInput = document.querySelector("#todoInput");
const todos = [];

function deleteTodo(event) {
    todoList.removeChild(event.target.parentElement);
}

function addTodoList(event) {
    event.preventDefault();
    const todo = todoInput.value;
    const todoLi = document.createElement("li");
    const todoSpan = document.createElement("span");
    todoSpan.innerText = todo;
    const todoBtn = document.createElement("button");
    todoBtn.addEventListener("click", deleteTodo);
    todoBtn.innerText = "❌";
    todoLi.appendChild(todoSpan);
    todoLi.appendChild(todoBtn);
    todoList.appendChild(todoLi);
    todoInput.value = "";
    todos.push(todo);
    console.log(todos);
}

todoForm.addEventListener("submit", addTodoList);
