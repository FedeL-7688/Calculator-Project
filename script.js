

// function add(x, y) {
//   return x + y;
// }
// function subtract(x, y) {
//   return x - y;
// }
// function multiply(x, y) {
//   return x * y;
// }
// function divide(x, y) {
//   return x / y;
// }

num1 = undefined
option = undefined
num2 = undefined
result = 0

function operate(a,operator,b) {
 

  switch (operator) {
    case "+":
   
      return a + b;
     
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      if(b == 0){
        return "error: Can't divide by 0";
        
      }
      return a / b;
    default:
      console.log("wrong operation");
  }
}


//calculator interface

calculatorContainer = document.querySelector(".container");
calculator = document.createElement("div");
calculator.id = "calculator";
calculatorContainer.appendChild(calculator);
histPlay = document.getElementById("history")
inputCont = document.querySelector("#inputCont");
buttonCont = document.querySelector("#buttonsCont");
calculator.append(inputCont, buttonCont);

inputField = document.createElement("input");
inputField.id = "input";
inputField.textContent = "hi";

inputCont.append(inputField);
//number buttons creation
// number 0
  numberZero = document.createElement("div")
  const btn = document.createElement("button");
  btn.classList.add("num");
  btn.textContent = "0";
  btn.addEventListener("click", () => {inputField.value += btn.textContent
 if (option == null){
   num1 = inputField.value
  }
  else num2 = inputField.value.split(option)[1];
  
  });
  numberZero.append(btn)
//from 1 to 3
firstRow = document.createElement("div")
for (let i = 1; i <= 3; i++) {
  const btn = document.createElement("button");
  btn.classList.add("num");
  btn.textContent = i;
  btn.addEventListener("click", () => {inputField.value += btn.textContent
 if (option == null){
   num1 = inputField.value
  }
  else num2 = inputField.value.split(option)[1];
  
  }
);
  firstRow.appendChild(btn);
 
}
//from 4 to 6
secondRow = document.createElement("div")
for (let i = 4; i<=6;i++){
  const btn = document.createElement("button");
  btn.classList.add("num");
  btn.textContent = i;
  btn.addEventListener("click", () => {
    inputField.value += btn.textContent
    if (option == null){
   num1 = inputField.value
  }
  else num2 = inputField.value.split(option)[1];
  
  }
);

  secondRow.appendChild(btn);

}
//from 7 to 9
thirdRow = document.createElement("div")
for (let i = 7;i<=9;i++){
    const btn = document.createElement("button");
  btn.classList.add("num");
  btn.textContent = i;
  btn.addEventListener("click", () => {
    inputField.value += btn.textContent
  if (option == null){
   num1 = inputField.value
  }
  else num2 = inputField.value.split(option)[1];

  }
);
  thirdRow.appendChild(btn);
}
buttonCont.append(numberZero,firstRow,secondRow,thirdRow)


///operator buttons

//add
 const addBtn = document.createElement("button")
 addBtn.classList.add("operators")
 addBtn.textContent = "+"
 calculator.append(addBtn)
 addBtn.addEventListener("click",()=> {inputField.value+= "+"
  option = "+"})

 //subtract

 const subBtn = document.createElement("button")
 subBtn.classList.add("operators")
 subBtn.textContent = "-"
 calculator.append(subBtn)

 subBtn.addEventListener("click",()=> {inputField.value+= "-"
  option = "-"})

 //multiply

const multiBtn = document.createElement("button")
 multiBtn.classList.add("operators")
 multiBtn.textContent = "*"
 calculator.append(multiBtn)
 multiBtn.addEventListener("click",()=> {inputField.value+= "*"
  option = "*"})

 //divide
 
 const divBtn = document.createElement("button")
 divBtn.classList.add("operators")
 divBtn.textContent = "/"
 calculator.append(divBtn)
 divBtn.addEventListener("click",()=> {inputField.value+= "/"
  option = "/"})

//equal
const eqBtn = document.createElement("button")
 eqBtn.classList.add("operators")
 eqBtn.textContent = "="
 calculator.append(eqBtn)

 eqBtn.addEventListener("click",()=>{


const n1 = parseFloat(num1)
const n2 = parseFloat(num2)

result = operate(n1,option,n2)
 
inputField.value = Math.round((result + Number.EPSILON) * 100) / 100
num1 = inputField.value
 }
)
 

//clear
const clearBtn = document.createElement("button")
clearBtn.classList.add("operators")
clearBtn.textContent = "C"
calculator.append(clearBtn)
clearBtn.addEventListener("click",(e)=>{
  e.preventDefault()
  inputField.value = ""
  num1 = undefined
  option = undefined
  num2 = undefined
})
// delete Button
const deleteBtn = document.createElement("button")
deleteBtn.classList.add("operators")
deleteBtn.textContent = "D"
calculator.append(deleteBtn)
deleteBtn.addEventListener("click",()=>{
  
  inputField.value = inputField.value.slice(0,-1)


  const total = inputField.value;

  if (!option) {
    num1 = total || undefined;
    num2 = undefined;
  } else {
    const splitted = text.split(option);

    num1 = splitted[0] || undefined;
    num2 = splitted[1] || undefined;

    if (total[total.length - 1] === option) {
      num2 = undefined;
    }
    if (!total.includes(option)) {
      option = undefined;
      num2 = undefined;
    }
  }
})

///
operators = document.querySelectorAll(".operators")
opCont = document.createElement("div")
opCont.id = "opCont"
operators.forEach(element => {
  opCont.appendChild(element) 
});
calculator.append(opCont)

///general buttons container
btnsCont = document.createElement("div")
btnsCont.append(buttonCont,opCont)
calculator.append(btnsCont)