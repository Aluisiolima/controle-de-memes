
function geraTelas(page){
    const home = document.getElementById('home');
    const adicionar = document.getElementById('adicionar');
    const perfil = document.getElementById('perfil');

    if(page === "home"){
        home.style.textDecoration = "underline";
        perfil.style.textDecoration = "none";
        adicionar.style.textDecoration = "none";
        geraCards(lista);
    }
    if(page === "perfil"){
        home.style.textDecoration = "none";
        perfil.style.textDecoration = "underline";
        adicionar.style.textDecoration = "none";
        const login = document.getElementById("login").style.display = "none";
    }
    if(page === "adicionar"){
        home.style.textDecoration = "none";
        perfil.style.textDecoration = "none";
        adicionar.style.textDecoration = "underline";
        
    }
}


function geraCards(list){
    const homePage = document.getElementById('homePage');
    let cards = "";
    for (let i = 0; i < list.length; i++) {
        const src = list[i][0];
        const img = list[i][1];
        const name = list[i][2];
        
        cards += `
            <div class="card" meme="${src}" style=" background-image: url(${img});">
                <p>${name}</p>
                <div class="like">
                    <i class="bi bi-heart" id="likes"></i>    
                </div>
            </div>
        `
    }
    homePage.innerHTML = cards;

    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', play);
    });
}