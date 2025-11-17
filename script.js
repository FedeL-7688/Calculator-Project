

function add(x, y) {
  return x + y;
}
function subtract(x, y) {
  return x - y;
}
function multiply(x, y) {
  return x * y;
}
function divide(x, y) {
  return x / y;
}

// num1 = parseInt(prompt("input a number"));
// option = parseInt(prompt("Choose an operation to realize "));
// num2 = parseInt(prompt(" input a second number"));

// function operate(a,operator,b) {
//   console.log("Welcome to the calculator!");
//   console.log("(1): add");
//   console.log("(2): subtract");
//   console.log("(3): multiply");
//   console.log("(4): divide");

//   switch (operator) {
//     case "+":
//       console.log(add(a, b));
//       break;
//     case 2:
//       console.log(subtract(num1, num2));
//       break;
//     case 3:
//       console.log(multiply(num1, num2));
//       break;
//     case 4:
//       console.log(divide(num1, num2));
//       break;
//     default:
//       console.log("wrong number");
//   }
// }
// operate();

//calculator interface

calculatorContainer = document.querySelector(".container");
calculator = document.createElement("div");
calculator.id = "calculator";
calculator.textContent = "Testing Calculator";
calculatorContainer.appendChild(calculator);
inputCont = document.querySelector("#inputCont");
buttonCont = document.querySelector("#buttonsCont");
calculator.append(inputCont, buttonCont);

inputField = document.createElement("input");
inputField.id = "input";
inputField.textContent = "hi";

inputCont.append(inputField);
//number buttons creation

//from 0 to 3
firstRow = document.createElement("div")
for (let i = 0; i <= 3; i++) {
  const btn = document.createElement("button");
  btn.classList.add("num");
  btn.textContent = i;
  btn.addEventListener("click", () => (inputField.value += btn.textContent));
  firstRow.appendChild(btn);
}
//from 4 to 6
secondRow = document.createElement("div")
for (let i = 4; i<=6;i++){
  const btn = document.createElement("button");
  btn.classList.add("num");
  btn.textContent = i;
  btn.addEventListener("click", () => (inputField.value += btn.textContent));
  secondRow.appendChild(btn);


}
//from 7 to 9
thirdRow = document.createElement("div")
for (let i = 7;i<=9;i++){
    const btn = document.createElement("button");
  btn.classList.add("num");
  btn.textContent = i;
  btn.addEventListener("click", () => (inputField.value += btn.textContent));
  thirdRow.appendChild(btn);
}
buttonCont.append(firstRow,secondRow,thirdRow)


///operator buttons

//add
 const addBtn = document.createElement("button")
 addBtn.classList.add("operators")
 addBtn.textContent = "+"
 calculator.append(addBtn)

 //subtract
 const subBtn = document.createElement("button")
 subBtn.classList.add("operators")
 subBtn.textContent = "-"
 calculator.append(subBtn)

 //multiply

const multBtn = document.createElement("button")
 multBtn.classList.add("operators")
 multBtn.textContent = "*"
 calculator.append(multBtn)

 //divide
 
 const divBtn = document.createElement("button")
 divBtn.classList.add("operators")
 divBtn.textContent = "/"
 calculator.append(divBtn)

//equal
const eqBtn = document.createElement("button")
 eqBtn.classList.add("operators")
 eqBtn.textContent = "="
 calculator.append(eqBtn)

operators = document.querySelectorAll(".operators")
opCont = document.createElement("div")
opCont.id = "opCont"
operators.forEach(element => {
  opCont.appendChild(element)
  
});
calculator.append(opCont)