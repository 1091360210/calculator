let operant='';
let firstNumber=0;
let secondNumber=0;
let inputVariable=0;
let result =0;
let display = document.querySelector(".viewer");

let numberKey = document.querySelectorAll(".num");
numberKey.forEach(key => {
    key.addEventListener('click',event=>{appendText(key.id)}) 
});
let opKey = document.querySelectorAll('.ops');
opKey.forEach(key => {
    key.addEventListener("click", event=>{setOperant(key.id)})
});
let clearKey = document.querySelector("#clear");
    clearKey.addEventListener('click', event =>{ clear()})
function appendText (str){
    
    if(display.innerText == 0){
        display.innerText = str;
    }
    else{   
    display.innerText = display.innerText + str;}
    if(inputVariable==0){
        inputVariable = str;
        console.log("input is: " + inputVariable)
    }
    else{
        inputVariable += str;
        console.log("input is: " + inputVariable)
    }
    
}

function setOperant(op){
    display.innerText += op;
    if(firstNumber==0){
        firstNumber = parseInt(inputVariable);
        inputVariable = 0;
        operant = op;

        console.log('firstum= '+ firstNumber + 'oprant: '+operant + "second num: " + secondNumber)
    }
    else if(firstNumber!=0 && !operant){
        operant = op;
    }
    else{
        secondNumber = parseInt(inputVariable);
        inputVariable =0;
        console.log('firstum!=0 '+ firstNumber + 'oprant: '+operant + "second num: " + secondNumber)
        calculate(firstNumber,secondNumber,operant);
        

        operant = op;
        
        firstNumber = result;
    }
    
}
function equal(){
    secondNumber = inputVariable;
    calculate(firstNumber,secondNumber,operant);
    display.innerText = result;
    operant='';
    firstNumber=result;
    secondNumber=0;
    inputVariable=0;
    result =0;
}   


function calculate(num1,num2,op){
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    switch(op){
        case '+':
            result = parseInt(num1+num2);
            break;
        case '-':
            result = parseInt(num1-num2);
            break;
        case '*':
            result = parseInt(num1*num2);
            break;
        case '/':
            result = parseInt(num1/num2);
            break;
    }
}

function clear(){
    display.innerText = '0';
    operant='';
    firstNumber=0;
    secondNumber=0;
    inputVariable=0;
    result =0;
    
    
}