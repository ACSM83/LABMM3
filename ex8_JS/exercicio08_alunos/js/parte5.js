//5.1
var nome = window.prompt("Qual o seu nome?");
//5.2
var idade = window.prompt('Qual a sua idade?');
//5.3
var palavra1 = window.prompt('Insira uma palavra:');
var palavra2 = window.prompt('Insira outra palavra:');
//5.4
var cor_fundo = window.prompt('De que cor quer pintar o interior da página?');
//5.5
var comp_metros = window.prompt("Introduza o comprimento em metros.");
var pes = comp_metros * 3.2808;
//5.6
var celcius = window.prompt("Introduza a temperatura em graus Celcius.");
var fahrenheit = (celcius * 1.8) + 32;
//5.1
console.log(nome);
//5.2
document.getElementById("content").innerHTML = idade;
//5.3
document.getElementById("palavra1").value = palavra1;
document.getElementById("palavra2").value = palavra2;
//5.4
document.getElementById("card-body").style.backgroundColor = cor_fundo;
//5.5
document.getElementById("metros").value = comp_metros;
document.getElementById("pes").value = pes;
//5.6
document.getElementById("celcius").value = celcius;
document.getElementById("fahrenheit").value = fahrenheit;