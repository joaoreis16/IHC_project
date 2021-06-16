function keydownEvent(event) {
    if (event.key === "Enter") {
        let text = event.target.value
        event.target.value = ""
        let messageFeed = document.querySelector("#messageFeed")
        let message = document.createElement("p")
        message.classList.add("chatWindow")
        message.innerText = text
        messageFeed.appendChild(message)
    }
}

function eggMusic(event) {
    let button = event.target
    if (!button.classList.contains('filled')) {
        button.src = 'img/filledEgg.svg'
        button.classList.add('filled')
    }
    else {
        button.src = 'img/egg.svg'
        button.classList.remove('filled')
    }
}


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

function getSongs() {
    return [
        {name:"Bohemian Rhapsody", artist:"Queen", liked:true},
        {name:"The Dark Side of the Moon", artist:"Pink Floyd", liked:false},
        {name:"Yellow Submarine", artist:"The Beatles", liked:false},
        {name:"Imagine", artist:"John Lennon", liked:true},
        {name:"Eye of the Tiger", artist:"Survivor", liked:true}
    ]
}


function getUploadSongData() {
    //console.log(emitmethod)
    let songName = "Martin dropped '" + document.querySelector("#uploadSongs-input4 input").value + "'"
    let json = JSON.parse(sessionStorage.getItem("publishedSongs"))
    console.log(json)
    json.push({name: songName})
    sessionStorage.setItem("publishedSongs", JSON.stringify(json))
}

function search(event) {
    let input = event.target.value
    let songs = getSongs()
    let foundSongs = songs.filter(song=>{
        return song.name.toUpperCase().search(input.toUpperCase())!==-1
    })
    let history = document.querySelector("#historyTopSearch")
    if (history) history.parentElement.removeChild(history)
    let searchedSongs = document.querySelector("#searchedSongs")
    Array.from(searchedSongs.children).forEach(c=>{
        searchedSongs.removeChild(c)
    })
    foundSongs.forEach(song=>{
        let element = document.createElement("div")
        element.innerHTML = song.name
        searchedSongs.appendChild(element)
    })
    
}
