const btnStart = document.querySelector(".start");
const btnReset = document.querySelector(".reset");
const btnResults = document.querySelector(".current-time");
const span = document.querySelector("span");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close");
const ul = document.querySelector("ul");

let liResult = 1;
let time = 0;
let activeBtn = false;
let idI;

const timer = () => {
  if (activeBtn === false) {
    activeBtn = !activeBtn;
    btnStart.textContent = "Stop";
    idI = setInterval(start, 10);
  } else {
    activeBtn = !activeBtn;
    btnStart.textContent = "Start";
    clearInterval(idI);
  }
};

const start = () => {
  time++;
  span.textContent = (time / 100).toFixed(2);
};

const reset = () => {
  results();
  time = 0;
  span.textContent = "---";
  activeBtn = false;
  btnStart.textContent = "Start";
  clearInterval(idI);
  liResult++;
};
const results = () => {
  const result = span.textContent;
  const li = document.createElement("li");
  li.textContent = `Time number ${liResult} = ${result}`;
  ul.appendChild(li);
};

const showModal = () => {
  modal.style.top = "250px";
};
const close = () => {
  modal.style.top = "-100%";
};

closeModal.addEventListener("click", close);
btnResults.addEventListener("click", showModal);
btnStart.addEventListener("click", timer);
btnReset.addEventListener("click", reset);
