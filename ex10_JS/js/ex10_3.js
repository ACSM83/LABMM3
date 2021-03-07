//Parte 3.
window.onload = function () {
    var total;
    var total2;
    var certas = 0;
    var erradas = 0;
    var resultado;
    var num1, num2, num3, operador1, operador2;

    document.getElementById("btn_jogar").onclick = function () {
        document.getElementById("entrada").style.display = "none";
        document.getElementById("jogo").style.display = "inline";

        num1 = parseInt(Math.random() * (9 - 1 + 1) + 1);
        document.getElementById("n1").value = num1;
        num2 = parseInt(Math.random() * (9 - 1 + 1) + 1);
        document.getElementById("n2").value = num2;
        num3 = parseInt(Math.random() * (9 - 1 + 1) + 1);
        document.getElementById("n3").value = num3;

        operador1 = parseInt(Math.random() * 4);
        //console.log(operador1);
        operador2 = parseInt(Math.random() * 4);
        //console.log(operador2);
        
        if (operador1 === 0 && operador2 === 0){
            document.getElementById("op1").value = "+";
            document.getElementById("op2").value = "+";
            total = num1 + num2 + num3;
        }
        if (operador1 === 0 && operador2 === 1){
            document.getElementById("op1").value = "+";
            document.getElementById("op2").value = "-";
            total = num1 + num2 - num3;
        }
        if (operador1 === 0 && operador2 === 2){
            document.getElementById("op1").value = "+";
            document.getElementById("op2").value = "x";
            total = num1 + (num2 * num3);
        }
        if (operador1 === 0 && operador2 === 3){
            document.getElementById("op1").value = "+";
            document.getElementById("op2").value = "/";
            total = num1 + (num2 / num3);
        }
        if (operador1 === 1 && operador2 === 0){
            document.getElementById("op1").value = "-";
            document.getElementById("op2").value = "+";
            total = num1 - num2 + num3;
        }
        if (operador1 === 1 && operador2 === 1){
            document.getElementById("op1").value = "-";
            document.getElementById("op2").value = "-";
            total = num1 - num2 - num3;
        }
        if (operador1 === 1 && operador2 === 2){
            document.getElementById("op1").value = "-";
            document.getElementById("op2").value = "x";
            total = num1 - (num2 * num3);
        }
        if (operador1 === 1 && operador2 === 3){
            document.getElementById("op1").value = "-";
            document.getElementById("op2").value = "/";
            total = num1 - (num2 / num3);
        }
        if (operador1 === 2 && operador2 === 0){
            document.getElementById("op1").value = "x";
            document.getElementById("op2").value = "+";
            total = num1 * num2 + num3;
        }
        if (operador1 === 2 && operador2 === 1){
            document.getElementById("op1").value = "x";
            document.getElementById("op2").value = "-";
            total = num1 * num2 - num3;
        }
        if (operador1 === 2 && operador2 === 2){
            document.getElementById("op1").value = "x";
            document.getElementById("op2").value = "x";
            total = num1 * num2 * num3;
        }
        if (operador1 === 2 && operador2 === 3){
            document.getElementById("op1").value = "x";
            document.getElementById("op2").value = "/";
            total = num1 * num2 / num3;
        }
        if (operador1 === 3 && operador2 === 0){
            document.getElementById("op1").value = "/";
            document.getElementById("op2").value = "+";
            total = num1 / num2 + num3;
        }
        if (operador1 === 3 && operador2 === 1){
            document.getElementById("op1").value = "/";
            document.getElementById("op2").value = "-";
            total = num1 / num2 - num3;
        }
        if (operador1 === 3 && operador2 === 2){
            document.getElementById("op1").value = "/";
            document.getElementById("op2").value = "x";
            total = num1 / num2 * num3;
        }
        if (operador1 === 3 && operador2 === 3){
            document.getElementById("op1").value = "/";
            document.getElementById("op2").value = "/";
            total = num1 / num2 / num3;
        }
        
        document.getElementById("resultado").placeholder = "";
        document.getElementById("resultado").focus();
    };

//2.
    document.getElementById("btn_verificar").onclick = function () {
        var resultado = parseInt(document.getElementById("resultado").value);
        console.log(resultado);
        if (isNaN(resultado)) {
            window.alert("Apenas são permitidos números inteiros.");
        } else {
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
                document.getElementById("modal-body").innerHTML = "Ooohhh!! Resposta Errada.";
                document.getElementById("modal-feedback-pic").src = "img/incorrect.gif";
                document.getElementById('btn_modal').click();
                console.log("errou");
                erradas += 1;
                document.getElementById("erradas").innerHTML = "Respostas erradas: " + erradas;
            }
        }
    }
};

