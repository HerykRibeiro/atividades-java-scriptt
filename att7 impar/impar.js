let primeiroNumero = document.querySelector("#primeiroNumero");
let botVerifica = document.querySelector("#botVerifica");

function nImpar (){
    let numero1 = Number(primeiroNumero.value);

    if (numero1 % 2 == 0){
        alert("o numero eh par");

    }else
        alert("o numero eh impar");
}

botVerifica.onclick = function(){
    nImpar();
}