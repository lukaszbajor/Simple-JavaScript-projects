//Implementation

const form = document.querySelector("form");
const ul = document.querySelector("ul");
const span = document.querySelector("span");
let liTasks = document.querySelectorAll(".task");
const input = document.querySelector("#add");
const inputS = document.querySelector(".search");
const p = document.querySelector(".info");

//Add task
const addTask = (e) => {
  if (input.value === "") {
    alert("You can't add an empty task!");
  }
  if (ul === "") {
    p.style.display = "block";
  } else {
    p.style.display = "none";
  }
  e.preventDefault();
  let taskValue = input.value;
  if (taskValue === "") return;
  const task = document.createElement("li");
  task.className = "task";
  task.innerHTML = `- ${taskValue} <i class="far fa-trash-alt"></i>`;
  ul.appendChild(task);
  input.value = "";
  span.textContent = liTasks.length + 1;
  task.querySelector(".fa-trash-alt").addEventListener("click", removeTask);
  liTasks = document.querySelectorAll(".task");
  emptyList();
};
//Remove task
const removeTask = (e) => {
  e.target.parentNode.remove();
  span.textContent = liTasks.length - 1;
  liTasks = document.querySelectorAll(".task");

  if (span.textContent === "0") {
    p.style.display = "block";
  }
};

form.addEventListener("submit", addTask);

//Search task
const searchTask = (e) => {
  let tasks = [...liTasks];
  const searchText = e.target.value.toLowerCase();
  tasks = tasks.filter((liTasks) =>
    liTasks.textContent.toLowerCase().includes(searchText)
  );
  ul.textContent = "";
  tasks.forEach((liTasks) => ul.appendChild(liTasks));
  span.textContent = tasks.length;
  emptyList();
};

const emptyList = () => {
  if (span.textContent === "0") {
    p.style.display = "block";
  } else {
    p.style.display = "none";
  }
};

inputS.addEventListener("input", searchTask);
