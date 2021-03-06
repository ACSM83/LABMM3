//3.1. e 3.2.
var texto1 = "1.25px";
var num1 = 1;
var num2 = 2;

document.getElementById("converter").onclick = function(){
    console.log(parseInt(texto1));
    console.log(parseFloat(texto1));
    console.log(num1 + num2);
    console.log(String(num1)+num2);
    console.log(String(num1)+ String(num2));
};
