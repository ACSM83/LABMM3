//1.
var total;
var certas = 0;
var erradas = 0;
var resultado;
var num1, num2, operador;


document.getElementById("btn_jogar").onclick = function () {
    document.getElementById("entrada").style.display = "none";
    document.getElementById("jogo").style.display = "inline";

    num1 = parseInt(Math.random() * 10);
    document.getElementById("n1").value = num1;
    num2 = parseInt(Math.random() * 10);
    document.getElementById("n2").value = num2;

    operador = parseInt(Math.random() * 2);
    console.log(operador);

    if (operador === 0) {
        document.getElementById("op").value = "+";
        total = num1 + num2;
        console.log(total)
    } else {
        document.getElementById("op").value = "-";
        total = num1 - num2;
        console.log(total)
    }
    //3.
    document.getElementById("resultado").placeholder = "";
    document.getElementById("resultado").focus();
};
//2.
document.getElementById("btn_verificar").onclick = function () {

    var resultado = parseInt(document.getElementById("resultado").value);
    document.getElementById("entrada").style.display = "inline";
    document.getElementById("jogo").style.display = "none";
    if (total === resultado) {
        document.getElementById("modal-title").innerHTML = "&#128512";
        document.getElementById("myModal").style.display = "inline";
        document.getElementById("modal-body").innerHTML = "PARABÉNS!! Resposta Certa.";
        document.getElementById("modal-feedback-pic").src = "img/correct.gif";
        document.getElementById('btn_modal').click();
        console.log("acertou");
        certas += 1;
        document.getElementById("certas").innerHTML = "Respostas certas: " + certas;
    } else {
        document.getElementById("modal-title").innerHTML = "&#128546";
        document.getElementById("myModal").style.display = "inline";
        document.getElementById("modal-body").innerText = "Ooohhh!! Resposta Errada.";
        document.getElementById("modal-feedback-pic").src = "img/incorrect.gif";
        document.getElementById('btn_modal').click();
        console.log("errou");
        erradas += 1;
        document.getElementById("erradas").innerHTML = "Respostas erradas: " + erradas;
    }

};
