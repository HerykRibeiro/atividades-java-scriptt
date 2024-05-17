let valor1 = document.querySelector("#valor1");
let valor2 = document.querySelector("#valor2");

function verificarNumeroMaior(){
    let maior1 = Number(valor1.value);
    let maior2 = Number(valor2.value);

    //retornar numero maior
    if (maior1 > maior2){
        alert (maior1);
    }else{
        alert(maior2);
    }
}

verificarQualNumeroMaior.onclick = function(){
    verificarNumeroMaior()
}