function scaricaCV(){

    const link = document.createElement("a");
    link.href = "/documenti/CV Daniel Tonin.pdf"; // percorso del file sul server
    link.download = "CV Daniel Tonin.pdf";    // nome del file scaricato
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

}

const container = document.getElementById("containerPopUp");



function apriPopup(indice) {

    let percorso = "";

    switch (indice) {
        case 1:
            percorso = "./popUp/popUpConfigRete.html";
            break;
        case 2:
            percorso = "./popUp/popUpProgOgg.html";
            break;
        case 3:
            percorso = "./popUp/popUpSvilWeb.html";
            break;
        case 4:
            percorso = "./popUp/popUpStorico.html";
            break;
        default:
            console.log("Indice non valido");
            return;
    }

    fetch(percorso)
        .then(response => response.text())
        .then(html => {
            container.innerHTML = html;
            document.getElementById("popupOverlay").style.display = "flex";
        })
        .catch(error => console.error("Errore:", error));
}

function chiudiPopup() {
    document.getElementById("popupOverlay").style.display = "none";
    container.innerHTML = "";
}

function chiudiFuori(event) {
    if (event.target.id === "popupOverlay") {
        chiudiPopup();
    }
}