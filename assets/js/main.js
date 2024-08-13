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
//lista profissoria 
const lista = [["./audio/eu tentei.mp3","./img/chico-moedas.jpg","eu tentei"]];
document.addEventListener("DOMContentLoaded", main("home"));

function play() {
    const audio = document.getElementById('audio');
    const musicFile = this.getAttribute('meme');
    audio.src = musicFile;
    audio.play();
}