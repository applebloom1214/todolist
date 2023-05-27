const todoForm = document.querySelector("#todoForm");
const todoList = document.querySelector("#todoList");
const todoInput = document.querySelector("#todoInput");
let todos = [];


function saveLocal() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    todos = todos.filter((todo) => todo.id !== parseInt(li.id));
    saveLocal();
    todoList.removeChild(li);
}

function printTodoList(todo) {
    const todoLi = document.createElement("li");
    todoLi.id = todo.id;
    const todoSpan = document.createElement("span");
    todoSpan.innerText = todo.text;
    const todoBtn = document.createElement("button");
    todoBtn.addEventListener("click", deleteTodo);
    todoBtn.innerText = "❌";
    todoLi.appendChild(todoSpan);
    todoLi.appendChild(todoBtn);
    todoList.appendChild(todoLi);
}

function addTodoList(event) {
    event.preventDefault();
    const todo = todoInput.value;
    if (todo === "") {
        return;
    }
    const todoObject = {
        text: todo,
        id: Date.now(),
    };
    printTodoList(todoObject);
    todoInput.value = "";
    todos.push(todoObject);
    saveLocal();
}

todoForm.addEventListener("submit", addTodoList);

function printTodos(item) {
    console.log(item);
}

const savedTodos = localStorage.getItem("todos");

if (savedTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(printTodoList);
}