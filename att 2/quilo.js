let valorQuilo = document.querySelector("#valorQuilo")
let quantosQuilo = document.querySelector("#quantosQuilo")
let btQuilo = document.querySelector("#btQuilo")


function valorkg (){
let valor1 = Number(valorQuilo.value)
let valor2 = Number(quantosQuilo.value)
let resultado = valor1 * valor2;
alert(resultado)
}

btQuilo.onclick = function(){
   valorkg()
}