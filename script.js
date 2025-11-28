// Kindly do not modify the prewritten code.
// Your task is to implement the functions below to make the calculator work.

let a = 12345678;
a = Math.floor(a / 10);
console.log(a);
let display = document.getElementById("display");
let currentInput = "";

function clearDisplay() {
  // TODO: Implement the clearDisplay function
  // This function should reset the currentInput and update the display
  currentInput = "";
  display.innerText = "0";
}
const clearInput = document.getElementById("ac");
clearInput.addEventListener("click", () => {
  clearDisplay();
});

function deleteLast() {
  // TODO: Implement the deleteLast function
  // This function should remove the last character from currentInput and update the display
  //   currentInput = Math.floor(currentInput / 10);
  currentInput = currentInput.slice(0, -1);
  display.innerText = currentInput || "0";
}
document.querySelectorAll(".button.gray").forEach((btn) => {
  if (btn.innerText === "DEL") {
    btn.addEventListener("click", () => {
      deleteLast();
    });
  }
});
function appendNumber(number) {
  // TODO: Implement the appendNumber function
  // This function should add the given number to currentInput and update the display
  currentInput += number;

  display.innerText = currentInput;
}

const buttonNumber = document.querySelectorAll(
  "button:not(.orange):not(.gray)"
);
buttonNumber.forEach((button) => {
  button.addEventListener("click", () => {
    appendNumber(button.innerText);
  });
});

function appendOperator(operator) {
  // TODO: Implement the appendOperator function
  // This function should add the given operator to currentInput and update the display
  currentInput += operator;

  display.innerText = currentInput;
}

document.querySelectorAll(".button.gray").forEach((btn1) => {
  if (btn1.innerText === "%") {
    btn1.addEventListener("click", () => {
      appendOperator(btn1.innerText);
    });
  }
});
const operand = document.querySelectorAll(".button.orange:not(.equals)");
operand.forEach((btn2) => {
  btn2.addEventListener("click", () => {
    appendOperator(btn2.innerText);
  });
});

function calculateResult() {
  // TODO: Implement the calculateResult function
  // This function should evaluate the currentInput, display the result, and handle errors
  try {
    let expression = currentInput.replace(/%/g, "/100");
    let result = eval(expression);
    display.innerText = result;
  } catch (error) {
    display.innerText = "Error";
    currentInput = "";
  }
}
document.querySelectorAll(".button.orange").forEach((butt) => {
  if (butt.innerText === "=") {
    butt.addEventListener("click", () => {
      calculateResult();
    });
  }
});
