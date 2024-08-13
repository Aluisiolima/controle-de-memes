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
        
    })
    .catch(error => {
        console.error("not fund:" ,error);
        view.innerHTML = "NOT fund componete";
    })
    return page
}
//lista profissoria 
lista = [["./audio/eu tentei.mp3","","eu tentei"]]
document.addEventListener("DOMContentLoaded", main("home"));

