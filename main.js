function takeValue(x) {
  result.innerHTML += x;
}

function clearInput() {
  result.innerHTML = "";
}

function calculateResult() {
  let resultOperation = eval(result.innerHTML);
  result.innerHTML = resultOperation;
}

let result = document.querySelector(".result");

const coma = document.querySelector("#coma");
const cero = document.querySelector("#cero");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");

const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const multiply = document.querySelector("#multiply");
const divide = document.querySelector("#divide");
const equal = document.querySelector("#equal");
const deleter = document.querySelector("#delete");

one.addEventListener("click", function () {
  takeValue(1);
});
two.addEventListener("click", function () {
  takeValue(2);
});
three.addEventListener("click", function () {
  takeValue(3);
});
four.addEventListener("click", function () {
  takeValue(4);
});
five.addEventListener("click", function () {
  takeValue(5);
});
six.addEventListener("click", function () {
  takeValue(6);
});
seven.addEventListener("click", function () {
  takeValue(7);
});
eight.addEventListener("click", function () {
  takeValue(8);
});
nine.addEventListener("click", function () {
  takeValue(9);
});
cero.addEventListener("click", function () {
  takeValue(0);
});
coma.addEventListener("click", function () {
  takeValue(".");
});

/* operations */
plus.addEventListener("click", function () {
  takeValue("+");
});
minus.addEventListener("click", function () {
  takeValue("-");
});
multiply.addEventListener("click", function () {
  takeValue("*");
});
divide.addEventListener("click", function () {
  takeValue("/");
});

equal.addEventListener("click", calculateResult);
deleter.addEventListener("click", clearInput);
