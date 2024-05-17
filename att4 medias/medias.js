let ipValor1 = document.querySelector("#ipValor1");
let ipValor2 = document.querySelector("#ipValor2");
let ipValor3 = document.querySelector("#ipValor3");
let btCalcular = document.querySelector("#btCalcular");
let h3Resultado = document.querySelector("#h3Resultado");

function calcular(){

let vlr1 = Number (ipValor1.value);
let vlr2 = Number (ipValor2.value);
let vlr3 = Number (ipValor3.value);

//Calcular a media aritmetica
    let mediaAritmetica = (vlr1 + vlr2 + vlr3) / 3;

    //Calcular a media ponderada(3,2 e 5)
    let somaValoresPesos = (vlr1 * 3) + (vlr2 * 2) + (vlr3 * 5);
    let somaPesos = 3 + 2 + 5 ;
    let mediaPonderada = somaValoresPesos / somaPesos;

    //Soma das medias
    let somaMedias = mediaAritmetica + mediaPonderada
    
    //media das medias
    let mediaMedias = somaMedias / 2

    h3Resultado.textContent = "media aritmetica" + mediaAritmetica +
    "media Ponderada"+ mediaPonderada+ 
    "soma das medias"+ somaMedias+
    "media das medias"+ mediaMedias;

}

btCalcular.onclick = function(){
    calcular()
}
