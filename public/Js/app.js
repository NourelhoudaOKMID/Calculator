const display = document.getElementById("display");
const buttons = document.querySelectorAll(".buttons button");

let current = "";
let previous = "";
let operator = null;

buttons.forEach(button => {
  button.addEventListener("click", () => {
// to display the numbers in the input with control the curr numbers to be visible 
    if (button.dataset.number) {
      current += button.dataset.number;
      display.value = current;
    }
// btns that have = +...
    if (button.dataset.operator) {
      if (current === "") return;

      if (previous !== "") {
        calculate();
      }

      operator = button.dataset.operator;
      previous = current;
      current = "";
    }

    if (button.dataset.action === "equals") {
      if (current === "" || previous === "") return;
      calculate();
      operator = null;
    }
// clear one numb
    if (button.dataset.action === "clear") {
      current = current.slice(0, -1);
      display.value = current || "0";
    }
//clear all
    if (button.dataset.action === "all-clear") {
      current = "";
      previous = "";
      operator = null;
      display.value = "0";
    }
//todo: fix this and search for another method
    if (button.dataset.action === "percent") {
      current = (parseFloat(current) / 100).toString();
      display.value = current;
    }
  });
});

function calculate() {
  let result;

  const prev = parseFloat(previous);
  const curr = parseFloat(current);
// check if is not a numb
  if (isNaN(prev) || isNaN(curr)) return;

  switch (operator) {
    case "+":
      result = prev + curr;
      break;
    case "-":
      result = prev - curr;
      break;
    case "*":
      result = prev * curr;
      break;
    case "/":
      result = curr === 0 ? "Error" : prev / curr;
      break;
    default:
      return;
  }

  current = result.toString();
  previous = "";
  display.value = current;
}
