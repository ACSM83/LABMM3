window.onload = function () {

    var totalToupeirasSaidas, totalToupeirasApanhadas, posicaoX, posicaoY, timerID, contador;
    var somToupeira = new Audio();
    var somFundo = new Audio();
    var somApanhada = new Audio();
    somFundo.src = "sons/background.mp3";

    document.getElementById("div_jogar").style.display = "block";
    document.getElementById("valor").style.display = "block";
    document.getElementById("toupeira").style.display = "none";
    document.getElementById("toupeiras_apanhadas").innerHTML = "0";
    document.getElementById("toupeiras_saidas").innerHTML = "0";

    document.getElementById("btn_jogar").onmouseover = function () {
        document.getElementById("btn_jogar").src = "imagens/botaoJogarOver.png";
    };

    document.getElementById("btn_jogar").onmouseout = function () {
        document.getElementById("btn_jogar").src = "imagens/botaoJogar.png";
    };
    var canPlay =false;
    document.getElementById("btn_jogar").onclick = function () {

        contador = 0;
        totalToupeirasSaidas = 0;
        totalToupeirasApanhadas = 0;
        document.getElementById("toupeiras_apanhadas").innerHTML = "0";
        document.getElementById("toupeiras_saidas").innerHTML = "0";

        var isPlaying = true;
        somFundo.play();
        document.getElementById("som_controlo").src = "imagens/unmute.png";

        document.getElementById("som_controlo").onclick = function () {

            if (isPlaying) {
                document.getElementById("som_controlo").src = "imagens/mute.png";
                somFundo.pause();
                isPlaying = false;
            } else {
                document.getElementById("som_controlo").src = "imagens/unmute.png";
                somFundo.play();
                isPlaying = true;
            }

        };



        canPlay = true;

        var canHit = false;
        timerID = setInterval(function () {
            contador++;
            if (canPlay) {
                canHit = true;
                posicaoX = parseInt(Math.random() * (window.innerWidth - 100 + 1));
                posicaoY = parseInt(Math.random() * (window.innerHeight - 100 + 1));
                document.getElementById("toupeira").src = "imagens/mole.png";
                document.getElementById("toupeira").style.position = "absolute";
                document.getElementById("toupeira").style.left = posicaoX + "px";
                document.getElementById("toupeira").style.top = posicaoY + "px";
                document.getElementById("toupeira").style.display = "inline";
                document.getElementById("btn_jogar").style.display = "none";

                somToupeira.src = "sons/toupeira.mp3";
                somToupeira.play();
                totalToupeirasSaidas = contador;
                document.getElementById("toupeiras_saidas").innerHTML = totalToupeirasSaidas;
                console.log("Contador", contador);
            } else {
                clearInterval(timerID);
                document.getElementById("btn_jogar").style.display = "block";
            }

        }, 1000);

        setTimeout(function(){
            canPlay = false;
        },30000);

        document.getElementById("toupeira").onclick = function () {
            if(canHit && canPlay){
                somApanhada.src = "sons/boing.mp3";
                somApanhada.play();
                totalToupeirasApanhadas += 1;
                document.getElementById("toupeiras_apanhadas").innerHTML = totalToupeirasApanhadas;
                document.getElementById("toupeira").src = "imagens/mole-dead.png";
                console.log("Total Toupeiras Apanhadas", totalToupeirasApanhadas);
                canHit = false;
            }
        };
    };

};