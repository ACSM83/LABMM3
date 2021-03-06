window.onload = function() {
//4.1. e 4.2.
    var texto_inicial = document.getElementById("content").innerHTML;
    var btn = document.createElement("button");
    var posicao = document.createElement("input");

    document.getElementById("adicionar").onclick = function () {
        document.getElementById("content").innerHTML = document.getElementById("content").innerHTML + "<p>" + texto_inicial + "</p>";
    };
//4.3.
    document.getElementById("reduzir").onclick = function () {
        var tamanho = document.getElementById("tamanho").value;
        var converter = parseInt(tamanho);

        document.getElementById("alvo").style.width = converter + "px";
        document.getElementById("alvo").style.position = "absolute";
        document.getElementById("alvo").style.top = "-150px";
    };

//4.4.
    btn.innerHTML = "Posicionar";
    btn.setAttribute("button", "posicionar");
    btn.setAttribute("id", "posicionar");
    document.getElementById("botoes").appendChild(btn);

    btn.onclick = function () {
        var posicionar = document.getElementById("posicao").value;
        var converter2 = parseInt(posicionar);

        //document.getElementById("alvo").style.left = converter2 +"px";
        //document.getElementById("alvo").style.left = converter2*2 +"px";
        document.getElementById("alvo").style.left = converter2 + 150 + "px";
    };

//4.5.
    posicao.setAttribute("input", "posicao");
    posicao.setAttribute("id", "posicao");
    document.getElementById("botoes").appendChild(posicao);

}