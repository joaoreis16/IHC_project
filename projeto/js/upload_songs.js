
function test(){
    var nome = document.getElementById("musica_nome").value;
    var descricao = document.getElementById("musica_descricao").value;
    var genero = document.getElementById("genero").value;
    if (nome==''){
        alert("Incorrect name");
        return false;
    }
}

function enviar(){
    var texto = document.getElementById("texto");
    texto.value='';
}
