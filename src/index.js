const loginForm = document.querySelector("#loginForm");
const username = document.querySelector("#username");


function printLoginSuccess(username) {
    const todoInput = document.querySelector("#todoInput");
    todoInput.placeholder = `${username}' s TO DO LIST`;
    todoInput.disabled = false;
    todoInput.style.borderBottom = "2px solid black";
}

function login(event) {
    event.preventDefault();
    const getUsername = username.value;
    if (getUsername === "") {
        alert("id를 입력해주세요 !")
        return;
    }
    localStorage.setItem("id", getUsername);
    printLoginSuccess(getUsername);
    loginForm.classList.remove("flex");
    loginForm.classList.add("hide");

}

loginForm.addEventListener("submit", login);

const savedUsername = localStorage.getItem("id");

if (savedUsername === null) {
    loginForm.classList.remove("hide");
    loginForm.classList.add("flex");
} else {
    loginForm.classList.remove("flex");
    printLoginSuccess(savedUsername);
}