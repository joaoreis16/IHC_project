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

function keydownEvent2() {
    let text = document.querySelector("#nomemusica").value
    let messageFeed = document.querySelector("#list_playlists")
    let message = document.createElement("div")
    
    message.classList.add("divPlaylist")
    message.innerText = text
    messageFeed.appendChild(message)
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

let songs = [
    {name:"Bohemian Rhapsody", artist:"Queen", liked:true},
    {name:"The Dark Side of the Moon", artist:"Pink Floyd", liked:false},
    {name:"Yellow Submarine", artist:"The Beatles", liked:false},
    {name:"Imagine", artist:"John Lennon", liked:true},
    {name:"Eye of the Tiger", artist:"Survivor", liked:true}
]

function getSongs() {
    return songs
}

function getPlaylists() {
    return [
        {name:"Chill Music"},
        {name:"Hip-Hop"}
    ]
}

function getUploadSongData() {
    //console.log(emitmethod)
    let songName = "Martin dropped '" + document.querySelector("#uploadSongs-input4 input").value + "'"
    let json = JSON.parse(sessionStorage.getItem("publishedSongs"))
    //console.log(json)
    json.push({name: songName, img: "img/newsong.png"})
    let songs = getSongs()
    songs.push({name: document.querySelector("#uploadSongs-input4 input").value, artist: "Martin Garrix", liked: false})
    sessionStorage.setItem("publishedSongs", JSON.stringify(json))
}

function searchSongs(event) {
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
        element.innerHTML = song.artist + " - " + song.name
        searchedSongs.appendChild(element)
    })
}

function searchPlaylists(event) {
    let input = event.target.value
    let playlists = getPlaylists()
    let foundPlaylists = playlists.filter(playlist=>{
        return playlist.name.toUpperCase().search(input.toUpperCase())!==-1
    })
    let history = document.querySelector("#historyTopSearch")
    if (history) history.parentElement.removeChild(history)
    let searchedPlaylists = document.querySelector("#searchedPlaylists")
    Array.from(searchedPlaylists.children).forEach(c=>{
        searchedPlaylists.removeChild(c)
    })
    foundPlaylists.forEach(playlist=>{
        let element = document.createElement("div")
        element.innerHTML = playlist.name
        searchedPlaylists.appendChild(element)
    })
}

function hideSongs() {
    let h3SongsDiv = document.querySelector("#h3Songs")
    let songsDiv = document.querySelector("#searchedSongs")
    let h3PlaylistsDiv = document.querySelector("#h3Playlists")
    let playlistsDiv = document.querySelector("#searchedPlaylists")
    if (h3SongsDiv.style.display !== "none") {
        h3SongsDiv.style.display = "none"
    }
    if (songsDiv.style.display !== "none") {
        songsDiv.style.display = "none"
    }
    if (h3PlaylistsDiv.style.display == "none") {
        h3PlaylistsDiv.style.display = "inline"
    }
    if (playlistsDiv.style.display == "none") {
        playlistsDiv.style.display = "inline"
    }
}   

function hidePlaylists() {
    let h3PlaylistsDiv = document.querySelector("#h3Playlists")
    let playlistsDiv = document.querySelector("#searchedPlaylists")
    let h3SongsDiv = document.querySelector("#h3Songs")
    let songsDiv = document.querySelector("#searchedSongs")
    if (h3PlaylistsDiv.style.display !== "none") {
        h3PlaylistsDiv.style.display = "none"
    }
    if (playlistsDiv.style.display !== "none") {
        playlistsDiv.style.display = "none"
    }
    if (h3SongsDiv.style.display == "none") {
        h3SongsDiv.style.display = "inline"
    }
    if (songsDiv.style.display == "none") {
        songsDiv.style.display = "inline"
    }
}

function showAll() {
    let h3SongsDiv = document.querySelector("#h3Songs")
    let songsDiv = document.querySelector("#searchedSongs")
    let h3PlaylistsDiv = document.querySelector("#h3Playlists")
    let playlistsDiv = document.querySelector("#searchedPlaylists")
    if (h3PlaylistsDiv.style.display == "none") {
        h3PlaylistsDiv.style.display = "inline"
    }
    if (playlistsDiv.style.display == "none") {
        playlistsDiv.style.display = "inline"
    }
    if (h3SongsDiv.style.display == "none") {
        h3SongsDiv.style.display = "inline"
    }
    if (songsDiv.style.display == "none") {
        songsDiv.style.display = "inline"
    }
}