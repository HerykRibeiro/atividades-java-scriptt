let Codigos = document.querySelector("#Codigos");
let btCod = document.querySelector("#btCod");

function pesquisar (){
    let produtos = Codigos.value

    if (produtos == "001"){
        alert ("parafuso")
    }else if(produtos == "002"){
        alert("porca")
    } else if (produtos == "003"){
        alert("prego")
    }else {
        alert ("diversos")
    }
}

btCod.onclick = function(){
    pesquisar()
}
