let valordeInicio = document.querySelector("#valordeInicio");
let calcularReajuste = document.querySelector("#calcularReajuste");

function valorReajustado(){
    let valorInicio = Number (valordeInicio.value)
    let calculoReajuste = valorInicio * 1.01
    alert(calculoReajuste)
}

calcularReajuste.onclick = function(){
    valorReajustado()
}