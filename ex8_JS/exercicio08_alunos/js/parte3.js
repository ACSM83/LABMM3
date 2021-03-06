var texto4 = 'Então eu venho lá de baixo dizem-me não sei quê, chego cá a cima afinal parece que não, em que é que ficamos?';
//3.1
document.getElementById("btn_texto").onclick = function () {
    window.alert("Can't touch this.");
};
//3.2
document.getElementById("btn_texto").onmouseover = function () {
    document.getElementById("content").innerHTML = texto4;
};
//3.3
document.getElementById("btn_apagar").onclick = function () {
    document.getElementById("content").innerHTML = "";
};
//3.4
document.getElementById("btn_texto").onclick = function () {
    console.log(document.getElementById("input1").value);
};