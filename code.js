const inputMensaje = document.querySelector("#mensaje");
const inputResultado = document.querySelector("#resultado");

const btnEncriptar = document.querySelector("#encriptar");
const btnDesencriptar = document.querySelector("#desencriptar");
const btnCopiar = document.querySelector("#copiar");


const targeta1 = document.querySelector(".targetas");

function validarMensaje(){
    var mensaje = inputMensaje.value;
    //Borrar errores previos 
    let erroresPrevios = targeta1.querySelectorAll(".error");

    for (let err of erroresPrevios){
        console.log(err);
        targeta1.removeChild(err);
    }
    var mensaje = inputMensaje.value;
    let letrasValidas = "abcdefghijklmnñopqrstuvwxyz";
    let mensajeError = document.createDocumentFragment();
    for (let letra of mensaje){
        if(!letrasValidas.includes(letra)) {
            //let p = document.createElement("p");
           // p.setAttribute("class","error");
          // p.textContent = '¡No se admiste letras en mayuscula ni asento!';
            //mensajeError.appendChild(p);
        }
    }
    targeta1.appendChild(mensajeError);
    if(mensajeError.children.length === 0){
        return true;

    }
    return false;
}
//elimiar campos 


//function de encriptar texto
function encriptar() {
    if(!validarMensaje()) return;
    var mensaje = inputMensaje.value;
    var mensajeEncriptado = mensaje.toLowerCase()
        .replaceAll("e", "enter")
        .replaceAll("i", "imes")
        .replaceAll("o", "ober")
        .replaceAll("a", "ai")
        .replaceAll("u", "ufat");
    inputResultado.value = mensajeEncriptado;
    inputMensaje.value ="";
    inputResultado.style.backgroundImage = "none"


}
//Function desencriptar
function desencriptar() {
    if(!validarMensaje()) return;
    var mensajeEncriptado = inputMensaje.value;
    var mensaje = mensajeEncriptado.toLowerCase()
        .replaceAll("enter", "e")
        .replaceAll("imes", "i")
        .replaceAll("ober", "o")
        .replaceAll("ai", "a")
        .replaceAll("u", "ufat");

    inputResultado.value = mensaje;
    inputMensaje.value="";

}

//function copiar mensaje encriptado
function copiar (){
    var mensajeEncriptado = inputResultado.value;
    navigator.clipboard.writeText(mensajeEncriptado);
    inputResultado.value="";

}




//functiones de btnCopiar.onclick
btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;
btnCopiar.onclick = copiar;
