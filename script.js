
function encriptar(){
    var frase = document.getElementById("textoEncriptado").value.toLowerCase();

    var textoEncriptado = frase.replace(/e/img, "enter");
    var textoEncriptado = textoEncriptado.replace(/o/img, "ober");
    var textoEncriptado = textoEncriptado.replace(/i/img, "imes");
    var textoEncriptado = textoEncriptado.replace(/a/img, "ai");
    var textoEncriptado = textoEncriptado.replace(/u/img, "ufat")


    document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;
    document.getElementById("copy").style.display = "show";
    document.getElementById("copy").style.display = "inherit";
    document.getElementById("textoDesencriptado").style.backgroundImage = "none";
    document.getElementById("ingrese").style.display = "none";

}

function desencriptar(){
    var frase = document.getElementById("textoEncriptado").value.toLowerCase();

    var textoEncriptado = frase.replace(/enter/img, "e");
    var textoEncriptado = textoEncriptado.replace(/ober/img, "o");
    var textoEncriptado = textoEncriptado.replace(/imes/img, "i");
    var textoEncriptado = textoEncriptado.replace(/ai/img, "a");
    var textoEncriptado = textoEncriptado.replace(/ufat/img, "u");



    document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;
    document.getElementById("textoDesencriptado").style.backgroundImage = "none";
    document.getElementById("ingrese").style.display = "none";

}

function copiar () {

    var contenido = document.querySelector("#textoDesencriptado");
    contenido.select();
    document.execCommand("copy");


}

function btnEncriptar (){
    const textoEncriptado = encriptar(textoDesencriptado.value);
    textoEncriptado.value = textoEncriptado;
    textoEncriptado.value = "";
}

function btnDesencriptar (){
    const textoEncriptado = desencriptar(textoDesencriptado.value);
    textoEncriptado.value = textoEncriptado;
    textoEncriptado.value = "";
}

