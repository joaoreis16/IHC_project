
function test(){
    let nome = document.getElementById("musica_nome").value;
    let descricao = document.getElementById("musica_descricao").value;
    let genero = document.getElementById("genero").value;
    if (nome==''){
        alert("Incorrect name");
        return false;
    }
}

function enviar(){
    let texto = document.getElementById("texto");
    texto.value='';
}

