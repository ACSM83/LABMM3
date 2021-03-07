//Parte 2.
window.onload = function () {
    var total;
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

        operador1 = parseInt(Math.random() * 2);
        console.log(operador1);
        operador2 = parseInt(Math.random() * 2);
        console.log(operador2);
        if (operador1 === 0) {
            document.getElementById("op1").value = "+";
            total = num1 + num2;
            console.log(total)
        } else {
            document.getElementById("op1").value = "-";
            total = num1 - num2;
            console.log(total)
        }
        if (operador2 === 0) {
            document.getElementById("op2").value = "+";
            total = total + num3;
            console.log(total)
        } else {
            document.getElementById("op2").value = "-";
            total = total - num3;
            console.log(total)
        }
        document.getElementById("resultado").placeholder = "";
        document.getElementById("resultado").focus();
    };

//2.
    document.getElementById("btn_verificar").onclick = function () {
        var resultado = parseInt(document.getElementById("resultado").value);
        console.log(resultado);
        if(isNaN(resultado)) {
            window.alert("Apenas são permitidos números inteiros.");
        }else{
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

