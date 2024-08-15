function main(page){
    const view = document.getElementById('view');
    fetch(`pages/${page}.html`)
    .then(response => {
        if(!response.ok){
            console.error("NOT fund componete");
            response.text() = "NOT fund componete";
        }
        return response.text();
    })
    .then(data => {
        view.innerHTML = data;
        geraTelas(page);
    })
    .catch(error => {
        console.error("not fund:" ,error);
        view.innerHTML = "NOT fund componete";
    })

}
//array de dados profissorio depois vem do banco 
const lista = [
    ["./audio/eu tentei.mp3","./img/chico-moedas.jpg","eu tentei"],
    ["./audio/meme do adm.mp3","./img/image-file.png","adm"],
    ["./audio/petinha pt.mp3","./img/image-file.png","tata"],
    ["./audio/ué não entendi esse final.mp3","./img/images.jpeg","caracol"],
    ["./audio/vou nada.mp3","./img/image-file.png","tata"]
];

document.addEventListener("DOMContentLoaded", main("home"));

function play() {
    const audio = document.getElementById('audio');
    const musicFile = this.getAttribute('meme');
    audio.src = musicFile;
    audio.play();
}

document.getElementById('menu').addEventListener('click', function() {
    const menu = document.getElementById('menu-inf');
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        menu.classList.add('show');
    } else {
        menu.classList.remove('show');
        menu.classList.add('hidden');
    }
});