const deleteBtn = document.querySelectorAll(".del");
// select the done button after the todo item
const todoItem = document.querySelectorAll("span.not + span.done");
// select the repeat button after the todo item
const todoComplete = document.querySelectorAll("span.completed + span.repeat");

const canShare = document.querySelectorAll("span.unshared");
const shareBtn = document.querySelectorAll(".share");
const collabTn = document.getElementById("collab__key");
const forgotPassword = document.getElementById("forgotPasswordButton");
const forgotPasswordPrompt = document.getElementById("forgotPasswordPrompt");
const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");
const togglePassword2 = document.querySelector("#togglePassword2");
const password2 = document.querySelector("#password2");

Array.from(deleteBtn).forEach((el) => {
  el.addEventListener("click", deleteTodo);
});

Array.from(todoItem).forEach((el) => {
  el.addEventListener("click", markComplete);
});
Array.from(todoComplete).forEach((el) => {
  el.addEventListener("click", markIncomplete);
});
Array.from(shareBtn).forEach((el) => {
  el.addEventListener("click", markShared);
});
Array.from(canShare).forEach((el) => {
  el.addEventListener("click", markUnshared);
});

async function deleteTodo() {
  const todoId = this.parentNode.dataset.id;
  try {
    const response = await fetch("todos/deleteTodo", {
      method: "delete",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        todoIdFromJSFile: todoId,
      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}

async function markComplete() {
  const todoId = this.parentNode.dataset.id;
  try {
    const response = await fetch("todos/markComplete", {
      method: "put",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        todoIdFromJSFile: todoId,
      }),
    });
    const data = await response.json();
    location.reload();
  } catch (err) {
    console.log(err);
  }
}

async function markIncomplete() {
  const todoId = this.parentNode.dataset.id;
  try {
    const response = await fetch("/groups/markIncomplete", {
      method: "put",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        todoIdFromJSFile: todoId,
      }),
    });
    const data = await response.json();
    location.reload();
  } catch (err) {
    console.log(err);
  }
}
async function markShared() {
  const todoId = this.parentNode.dataset.id;
  try {
    const response = await fetch("todos/markShared", {
      method: "put",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        todoIdFromJSFile: todoId,
      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}
async function markUnshared() {
  const todoId = this.parentNode.dataset.id;
  try {
    const response = await fetch("todos/markUnshared", {
      method: "put",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        todoIdFromJSFile: todoId,
      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}

// this will send notification to the user if the invitation is successfull or not

// document.getElementById("forgotPasswordPrompt").addEventListener('click', forgotYourPassword);

// function forgotYourPassword(){
//   console.log("Hello")
// }

togglePassword.addEventListener("click", function (e) {
  // toggle the type attribute
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  // toggle the eye / eye slash icon
  this.classList.toggle("fa-eye");
});

togglePassword2.addEventListener("click", function (e) {
  // toggle the type attribute
  const type =
    password2.getAttribute("type") === "password" ? "text" : "password";
  password2.setAttribute("type", type);
  // toggle the eye / eye slash icon
  this.classList.toggle("fa-eye");
});
