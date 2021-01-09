let form = document.querySelector("#task-form");
let taskList = document.querySelector("#added-task");
let clear_btn = document.querySelector("#clear-btn");
let filter = document.querySelector("#filter-task");
let taskInput = document.querySelector("#new-task");

form.addEventListener("submit", addTask);
taskList.addEventListener("click", removeTask);
clear_btn.addEventListener("click", clearTaskList);
filter.addEventListener("keyup", filterTask);
document.addEventListener("DOMContentLoaded", getTask);
function addTask(e) {
  if (taskInput.value === "") {
    alert("Please,Insert A Task");
  } else {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(taskInput.value + " "));
    let link = document.createElement("a");
    link.setAttribute("href", "#");
    link.appendChild(document.createTextNode("x"));
    li.appendChild(link);
    taskList.appendChild(li);
    storeInLocalStorage(taskInput.value);
    taskInput.value = "";
  }
  e.preventDefault();
}

function removeTask(e) {
  if (e.target.hasAttribute("href")) {
    if (confirm("Are You Sure?")) {
      let ele = e.target.parentElement;
      ele.remove();
      removeFromLS(ele);
    }
  }
}

function clearTaskList(e) {
  if (taskList.innerHTML == "") {
    window.alert("No task is Added");
  } else {
    taskList.innerHTML = "";
  }
  localStorage.clear();
}

function filterTask(e) {
  let text = e.target.value.toLowerCase();

  document.querySelectorAll("li").forEach((task) => {
    let item = task.firstChild.textContent;
    if (item.toLocaleLowerCase().indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = " none";
    }
  });
}

function storeInLocalStorage(task) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function getTask() {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.forEach((item) => {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(item + " "));
    let link = document.createElement("a");
    link.setAttribute("href", "#");
    link.appendChild(document.createTextNode("x"));
    li.appendChild(link);
    taskList.appendChild(li);
  });
}

function removeFromLS(task) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  let li = task;
  li.removeChild(li.lastChild);
  tasks.forEach((task, index) => {
    if (li.textContent.trim() == task) {
      tasks.splice(index, 1);
    }
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
