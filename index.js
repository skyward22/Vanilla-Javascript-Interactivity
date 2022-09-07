console.log("Javascript has been connected.");

const plusBtn = document.querySelector("#plus-btn");
const minusBtn = document.querySelector("#minus-btn");
const resetBtn = document.querySelector("#reset-btn");
const counterText = document.querySelector("#counter");

const themeBtns = document.querySelectorAll(".theme-buttons");

let count = 0;

const increase = () => {
  count++;
  console.log(count);
  counterText.textContent = count;
};

const decrease = () => {
  count--;
  console.log(count);
  counterText.textContent = count;
};

const reset = () => {
  count = 0;
  console.log(count);
  counterText.textContent = count;
};

const selectTheme = (event) => {
  console.log(event.target.textContent);
  let theme = event.target.textContent;
  document.querySelector("body").className = theme;
  document.querySelector("main").className = theme;

  const buttons = document.querySelectorAll("button");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].className = theme;
  }
};

plusBtn.addEventListener("click", increase);
minusBtn.addEventListener("click", decrease);
resetBtn.addEventListener("click", reset);

for (let i = 0; i < themeBtns.length; i++) {
  console.log(themeBtns[i]);
  themeBtns[i].addEventListener("click", selectTheme);
}
