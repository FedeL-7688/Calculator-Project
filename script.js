

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
option = null
num2 = undefined
result = 0

function operate(a,operator,b) {
 

  switch (operator) {
    case "+":
      console.log(a + b);
      return a + b;
     
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
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
buttonCont.append(firstRow,secondRow,thirdRow)


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
  console.log(inputField.value)
  console.log("n1 value: ",n1 )
  console.log(option)
  console.log("n2 value: ",n2)
  

  inputField.value += " = " + operate(n1,option,n2)

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