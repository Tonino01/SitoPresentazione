



function scaricaCV(){

    const link = document.createElement("a");
    link.href = "/documenti/CV Daniel Tonin.pdf"; // percorso del file sul server
    link.download = "CV Daniel Tonin.pdf";    // nome del file scaricato
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

}