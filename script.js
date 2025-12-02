num1 = null;
option = null;
num2 = null;
result = null;
///operate function
function operate(a, operator, b) {
  const n1 = parseFloat(a);
  const n2 = parseFloat(b);
  switch (operator) {
    case "+":
      
     return n1 + n2;
      

    case "-":
      return n1 - n2;
    case "*":
      return n1 * n2;
    case "/":
      if (n2== 0) {
        return "error: Can't divide by 0";
      }
      return n1 / n2;
    default:
      console.log("wrong operation");
  }
}

//calculator interface

calculatorContainer = document.querySelector(".container");
calculator = document.createElement("div");
calculator.id = "calculator";
calculatorContainer.appendChild(calculator);
histPlay = document.getElementById("history");
inputCont = document.querySelector("#inputCont");
buttonCont = document.querySelector("#buttonsCont");
calculator.append(inputCont, buttonCont);

inputField = document.createElement("input");
inputField.id = "input";
inputField.textContent = "hi";

inputCont.append(inputField);
//number buttons creation
// number 0
numberZero = document.createElement("div");
const btn = document.createElement("button");
btn.classList.add("num");
btn.textContent = "0";
btn.addEventListener("click", () => {
  inputField.value += btn.textContent;
  if (option == null) {
    num1 = inputField.value;
  } else num2 = inputField.value.split(option)[1];
});
numberZero.append(btn);
//from 1 to 3
firstRow = document.createElement("div");
for (let i = 1; i <= 3; i++) {
  const btn = document.createElement("button");
  btn.classList.add("num");
  btn.textContent = i;
  btn.addEventListener("click", () => {
    inputField.value += btn.textContent;
    if (option == null) {
      num1 = inputField.value;
    }
    if (option != null) {
      num2 = inputField.value.split(option)[1];
    }
  });
  firstRow.appendChild(btn);
}
//from 4 to 6

secondRow = document.createElement("div");
for (let i = 4; i <= 6; i++) {
  const btn = document.createElement("button");
  btn.classList.add("num");
  btn.textContent = i;
  btn.addEventListener("click", () => {
    inputField.value += btn.textContent;
    if (option == null) {
      num1 = inputField.value;
    } else num2 = inputField.value.split(option)[1];
  });

  secondRow.appendChild(btn);
}
//from 7 to 9
 thirdRow = document.createElement("div");
 for (let i = 7; i <= 9; i++) {
  const btn = document.createElement("button");
  btn.classList.add("num");
  btn.textContent = i;
  btn.addEventListener("click", () => {
    inputField.value += btn.textContent;
    if (option == null) {
      num1 = inputField.value;
    } else num2 = inputField.value.split(option)[1];
  });
  thirdRow.appendChild(btn);
 }
 buttonCont.append(numberZero, firstRow, secondRow, thirdRow);



//repeated operators function
 function repOperation(optor) {
  if (num1 !== null && num2 !== null ) {
    result = operate(num1, option, num2);
    console.log(result)
    inputField.value = result + optor;
    num1 = result;
    num2 = null;
    option = optor
    return
  } else if(inputField.value[inputField.value.length-1]==optor){
    return
  }
  else {inputField.value += optor
    option = optor
  }
 }

///operator buttons
//add
 const addBtn = document.createElement("button");
  addBtn.classList.add("operators");
  addBtn.textContent = "+";
  calculator.append(addBtn);
  addBtn.addEventListener("click", () => {
   repOperation("+");
   
   });

//subtract

const subBtn = document.createElement("button");
subBtn.classList.add("operators");
subBtn.textContent = "-";
calculator.append(subBtn);

subBtn.addEventListener("click", () => {
  repOperation("-")
});

//multiply

const multiBtn = document.createElement("button");
multiBtn.classList.add("operators");
multiBtn.textContent = "*";
calculator.append(multiBtn);
multiBtn.addEventListener("click", () => {
  repOperation("*")
});

//divide

const divBtn = document.createElement("button");
divBtn.classList.add("operators");
divBtn.textContent = "/";
calculator.append(divBtn);
divBtn.addEventListener("click", () => {
  repOperation("/")
});

//equal

 const eqBtn = document.createElement("button");
 eqBtn.classList.add("operators");
 eqBtn.textContent = "=";
 numberZero.append(eqBtn);
 
 eqBtn.addEventListener("click", () => {
  
  if (num1 !== null && option !== null && num2 !== null) {
    result = operate(num1, option, num2);
    inputField.value = Math.round((result + Number.EPSILON) * 100) / 100;
    num1 = inputField.value;
    num2 = null;
    option = null;
  }
  console.log(inputField.value)
  });

//decimal Point

 decPoint = document.createElement("button")
 decPoint.classList.add("operators")
 decPoint.textContent = ".";
 calculator.append(decPoint)
 
  decPoint.addEventListener("click",()=>{
  let currNum = option == null? inputField.value : inputField.value.split(option)[1]
  if(currNum && currNum.includes(".")){
    return
  }else inputField.value += ".";
 })

//clear
const clearBtn = document.createElement("button");
clearBtn.classList.add("operators");
clearBtn.textContent = "C";
numberZero.append(clearBtn);
clearBtn.addEventListener("click", (e) => {
  e.preventDefault();
  inputField.value = "";
  num1 = null;
  option = null;
  num2 = null;
});
// delete Button
const deleteBtn = document.createElement("button");
deleteBtn.classList.add("operators");
deleteBtn.textContent = "D";
calculator.append(deleteBtn);
deleteBtn.addEventListener("click", () => {
  inputField.value = inputField.value.slice(0, -1);

  const total = inputField.value;

  if (!option) {
    num1 = total || null;
    num2 = null;
  } else {
    const splitted = total.split(option);
    num1 = splitted[0] || null;
    num2 = splitted[1] || null;
    if (total[total.length - 1] === option) {
      num2 = null;
    }
    if (!total.includes(option)) {
      option = null;
      num2 = null;
    }
  }
});

///all operators selection
operators = document.querySelectorAll(".operators");
opCont = document.createElement("div");
opCont.id = "opCont";
operators.forEach((element) => {
  opCont.appendChild(element);
});
calculator.append(opCont);

///general buttons container
btnsCont = document.createElement("div");
btnsCont.append(buttonCont, opCont);
calculator.append(btnsCont);
