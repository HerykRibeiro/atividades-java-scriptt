let valor1 = document.querySelector("#valor1")
let valor2 = document.querySelector("#valor2")
let valor3 = document.querySelector("#valor3")
let valor4 = document.querySelector("#valor4")
let botaoMenor = document.querySelector("#botaoMenor")

function nMenor(){
    let numero1 = Number (valor1.value)
    let numero2 = Number (valor2.value)
    let numero3 = Number (valor3.value)
    let numero4 = Number (valor4.value)
    
    //retornar numero menor

    if (numero1 < numero2 && numero3 && numero4){
    alert(`o numero: ${numero1} é o menor`)

    }else if (numero2 < numero1 && numero3 && numero4) {
        alert(`o numero: ${numero2} é o menor`)

    }else if (numero3 < numero1 && numero2 && numero4){
        alert(`o numero: ${numero3} é o menor`)

}   else (numero4 < numero1 && numero2 && numero3)
    alert(`o numero: ${numero4} é o menor`)
}

    botaoMenor.onclick = function(){
        nMenor();
    }



    


    

