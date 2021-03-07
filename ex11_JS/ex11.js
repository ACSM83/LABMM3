window.onload = function() {
    var nome, valor, num, tentativas;
    var somStart = new Audio();
    var somErro = new Audio();
    var somLost = new Audio();


    document.getElementById("nome").focus();

    document.getElementById("tentativas-numero").innerHTML = "5";

    document.getElementById("inicio").onclick = function () {
        nome = document.getElementById("nome").value;
        if (nome === "") {
            document.getElementById("mensagem_erro").innerHTML = "Desculpe não entendi!!!";
        } else {
            valor = parseInt(Math.random()* 101);
            document.getElementById("inicio").style.display ="none";
            //console.log(nome, valor);
            somStart.src = "media/start.mp3";
            somStart.play();
        }
    };
    document.getElementById('apostar').onclick = function() {
        apostar()
    }

    function reiniciar() {
        tentativas = 5;
        num = document.getElementById("numero").value = "";
        document.getElementById("msgresultado").innerHTML = "";
        document.getElementById("tentativas-numero").innerHTML = "5";
        document.getElementById("msgtitulo").innerHTML = "";
        document.getElementById("apostar").innerHTML = "Apostar";
        document.getElementById("inicio").click(); //gera novamente o número aleatório
        document.getElementById("victory").style.display = "none";
        document.getElementById('apostar').onclick = function(){
            apostar();
        }
    }

    function apostar() {
        num = parseInt(document.getElementById("numero").value);
        tentativas = parseInt(document.getElementById("tentativas-numero").innerHTML);

        if (num > 0 && num <= 100) {
            if (tentativas > 0) {
                if (num === valor) {
                    document.getElementById("msgtitulo").className = "text-success";
                    document.getElementById("msgtitulo").innerHTML = "Acertaste!" + ' ' + nome;
                    document.getElementById("msgresultado").innerHTML = document.getElementById("tentativas").innerHTML;
                    document.getElementById("victory").play();
                    document.getElementById("victory").style.display = "inherit";
                    document.getElementById("apostar").innerHTML = "Reiniciar";
                    document.getElementById("apostar").onclick = function () {
                        reiniciar();
                    }
                } else if (num > valor) {
                    document.getElementById("msgtitulo").className = "text-danger";
                    document.getElementById("msgtitulo").innerHTML = "Erraste!!!";
                    document.getElementById("msgresultado").innerHTML = "O número introduzido é superior ao valor sorteado.";
                    somErro.src= "media/erro.mp3";
                    somErro.play();
                } else {
                    document.getElementById("msgtitulo").className = "text-danger";
                    document.getElementById("msgtitulo").innerHTML = "Erraste!!!";
                    document.getElementById("msgresultado").innerHTML = "O número introduzido é inferior ao valor sorteado.";
                    somErro.src= "media/erro.mp3";
                    somErro.play();
                }
                tentativas -= 1;
                document.getElementById("tentativas-numero").innerHTML = tentativas;
                //console.log(tentativas);
            } else {
                document.getElementById("msgtitulo").innerHTML = "ATENÇÃO!!";
                document.getElementById("msgresultado").innerHTML = "Atingiste o limite de tentativas.";
                somLost.src = "media/lost.mp3";
                somLost.play();
                document.getElementById("apostar").innerHTML = "Reiniciar";
                document.getElementById("apostar").onclick = function () {
                    reiniciar();
                }
            }
        }else{
            document.getElementById("msgtitulo").innerHTML = "ATENÇÃO!!";
            document.getElementById("msgresultado").innerHTML = "o número introduzido deverá estar entre 0 e 100.";
        }
    }
};