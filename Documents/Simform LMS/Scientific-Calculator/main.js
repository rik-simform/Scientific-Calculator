function degree(){
    document.calculator.result.value = (document.calculator.result.value * Math.PI) / 180;
}
function fixed_to_exponent(){
    document.calculator.result.value = (document.calculator.result.value- 32) / 1.8;
}

// Memory function that can add data in the memory.
let ms= ""; 
function memory_p() {
    if (document.calculator.result.value =='') { return }
    ms += '+'+document.calculator.result.value;
    document.calculator.result.value = "";
}

// memory function that can subract data from the memory.
function memory_s() {
    if (document.calculator.result.value =='') { return }
    ms += '-'+document.calculator.result.value;
    document.calculator.result.value = "";
}

// memory function that stores the data in the memory.
function print_ms(){
        document.calculator.result.value = eval(ms);
          
}

//memory function that can recall data one by one.
let i= 0;
function memory_recall(){
   i %= eval(ms.length);
   document.calculator.result.value = ms[i]; 
   i++;
   
}

//  trigonometry Functions
function sin(){
    document.calculator.result.value=Math.sin(document.calculator.result.value);
}

function sinh(){
    document.calculator.result.value=Math.sinh(document.calculator.result.value);
}
function cos(){
    document.calculator.result.value=Math.cos(document.calculator.result.value);
}

function cosh(){
    document.calculator.result.value=Math.cosh(document.calculator.result.value);
}
function tan(){
     document.calculator.result.value=Math.tan(document.calculator.result.value);
}

function tanh(){
    document.calculator.result.value=Math.tanh(document.calculator.result.value);
}

// Math functions.
function abs(){
    document.calculator.result.value = Math.abs(document.calculator.result.value);
}
function ceil(){
    document.calculator.result.value = Math.ceil(document.calculator.result.value);
}
function round(){
    document.calculator.result.value = Math.round(document.calculator.result.value);
}
function floor(){
    document.calculator.result.value = Math.floor(document.calculator.result.value);
}

// gives the pi value of given number.
function pi(){
    document.calculator.result.value *= Math.PI;
}

function e(){
    document.calculator.result.value *= Math.E;
}
function log(){
    document.calculator.result.value = Math.log(document.calculator.result.value);
}

// this will clears the result
function Clear() {
    document.calculator.result.value = '';
    ms = 0;
}
function deleteChar(){
    document.calculator.result.value = document.calculator.result.value.substring(0,  document.calculator.result.value.length - 1)
}

function square(){
    document.calculator.result.value = Math.pow(document.calculator.result.value, 2);
}

function power_x10(){
    document.calculator.result.value = Math.pow(document.calculator.result.value, 10);
}

// gives 1/x value of given number
function half(){
    document.calculator.result.value = (1/document.calculator.result.value) ;
}

function exp(){
    document.calculator.result.value = Math.exp(document.calculator.result.value);
}

function root(){
    document.calculator.result.value = Math.sqrt(document.calculator.result.value);
}

// Brackets
function openbracket(value){
    document.calculator.result.value += value;
}
function closebracket(value){
    document.calculator.result.value += value;
}

// n! gives factorial of the given number.
function factorial(){
    let i,num,f;
    f=1;
    num= document.calculator.result.value;
    for (i = 1; i <= num ; i++){
        f=f*i;     
    }
    i=i-1;
    document.calculator.result.value =f;
}

function cubed(){
    document.calculator.result.value = Math.pow(document.calculator.result.value, 3);
}

function power(val) {
    let getValue = document.getElementById("d").value;
    
        let powerTotal = Math.pow(getValue,nextValue);
        document.getElementById("d").value = powerTotal;
       }

// Gives 10 raised to the power of given number
function ten_power_x(){
    let i,num,f;
    f=1;
    num=document.calculator.result.value;
    for (i = 1; i <= num ; i++){
        f=f*10;     
    }
    
    document.calculator.result.value =f;
}

function logorithm() {
    document.calculator.result.value = Math.log(document.calculator.result.value);
}
// provides negative/positive value to the value.
function changeSign() {
    let positive = document.calculator.result.value;
    let negative = positive * -1;
    document.calculator.result.value = negative;
}

function sqrt3(){
    document.calculator.result.value = Math.pow(document.calculator.result.value, 1/3);
} 

// The modulus operator (%) returns the remainder.
function mod(value){
    document.calculator.result.value +=value;
}

function number(value){
    document.calculator.result.value += value;
}

function equal(){
    document.calculator.result.value = eval(document.calculator.result.value);
}