const deleteBtns = document.querySelectorAll(".del-item");

// select the done button after the todo item
const todoItem = document.querySelectorAll("span.not + span.done");
// select the repeat button after the todo item
const todoComplete = document.querySelectorAll("span.completed + span.repeat");

// delete group confirmation
let deleteGroupHandler = document.querySelector("a.delete-group");
if (deleteGroupHandler) {
  deleteGroupHandler.addEventListener("click", function (event) {
    event.preventDefault();
    const confirmed = confirm(this.getAttribute("data-confirm"));
    const groupId = this.getAttribute("data-groupid");
    if (confirmed) {
      console.log("Confirmed");
      deleteGroup(groupId);
    }
  });
}

const canShare = document.querySelectorAll("span.unshared");
const shareBtn = document.querySelectorAll(".share");
const collabTn = document.getElementById("collab__key");
const forgotPassword = document.getElementById("forgotPasswordButton");
const forgotPasswordPrompt = document.getElementById("forgotPasswordPrompt");
const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");
const togglePassword2 = document.querySelector("#togglePassword2");
const password2 = document.querySelector("#password2");

Array.from(deleteBtns).forEach((el) => {
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
    const response = await fetch("/groups/deleteTodo", {
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
    const response = await fetch("/groups/markComplete", {
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

// Delete group
async function deleteGroup(groupId) {
  console.log("****", groupId);

  try {
    const response = await fetch("/groups/deleteGroup", {
      method: "delete",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        groupIdFromJSFile: groupId,
      }),
    });
    const data = await response.json();
    // console.log(data);
    let url = location.href;
    location.assign(url.slice(0, url.lastIndexOf("/")));
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
