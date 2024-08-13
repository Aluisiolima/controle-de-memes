
function geraTelas(page){
    if(page === "home"){
        geraCards(lista);
  
    }else if(page === "perfil"){

    }else {

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
            </div>
        `
    }
    homePage.innerHTML = cards;

    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', play);
    });
}