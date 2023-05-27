const loginForm = document.querySelector("#loginForm");
const loginSuccess = document.querySelector("#loginSuccess");
const btn = document.querySelector("#loginBtn");
const username = document.querySelector("#username");


function printLoginSuccess() {
    loginSuccess.innerHTML = `환영합니다 ! ${localStorage.getItem("id")}님 !`;
}

function login(event) {
    event.preventDefault();
    const getUsername = username.value;
    if (getUsername === "") {
        alert("id를 입력해주세요 !")
        return;
    }
    localStorage.setItem("id", getUsername);
    printLoginSuccess();
    loginSuccess.classList.remove("hide");
    loginForm.classList.remove("flex");
    loginForm.classList.add("hide");

}

btn.addEventListener("click", login);

const savedUsername = localStorage.getItem("id");

if (savedUsername === null) {
    loginForm.classList.remove("hide");
    loginForm.classList.add("flex");
} else {
    loginSuccess.classList.remove("hide");
    loginForm.classList.remove("flex");

    printLoginSuccess();
}