


function add(x,y){
   return x + y }
function subtract(x,y){
    return x - y
}
function multiply(x,y){
   return x * y
}
function divide(x,y){
    return x / y
}

function operate(){
     num1 = parseInt(prompt("input a number"))
     
     console.log("Welcome to the calculator!")
     console.log("(1): add")
     console.log("(2): subtract")
     console.log("(3): multiply")
     console.log("(4): divide")
     
     option = parseInt(prompt("Choose an operation to realize "))
     num2 = parseInt(prompt(" input a second number"))
     
    switch(option){
        case 1:console.log( add(num1,num2));
        break;
        case 2:console.log(subtract(num1,num2));
        break;
        case 3:console.log(multiply(num1,num2));
        break;
        case 4:console.log(divide(num1,num2));
        break;
        default: console.log("wrong number");
        
        
    }
    


}
operate()



//calculator interface

calculatorContainer = document.querySelector(".container")
calculator = document.createElement("div")
calculator.id = "calculator";
calculator.textContent = "Testing";
calculatorContainer.appendChild(calculator)
inputCont = document.querySelector("#inputCont")
buttonCont = document.querySelector("#buttonCont")
calculator.append(inputCont,buttonCont)

