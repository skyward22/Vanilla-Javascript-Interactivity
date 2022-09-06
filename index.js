console.log("Javascript has been connected.");

const plusBtn = document.querySelector("#plus-btn");
const minusBtn = document.querySelector("#minus-btn");
const resetBtn = document.querySelector("#reset-btn");

let count = 0;

const increase = () => {
  count++;
  console.log(count);
};

const decrease = () => {
  count--;
  console.log(count);
};

const reset = () => {
  count = 0;
  console.log(count);
};

plusBtn.addEventListener("click", increase);
minusBtn.addEventListener("click", decrease);
resetBtn.addEventListener("click", reset);
