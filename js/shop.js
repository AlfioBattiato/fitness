

//creazione card nella sezione shop

const prodotti = [
    {
        url: "immagini/prodotti/proteina3.webp",
        titolo: "PROTEINE PURE 30g",
        descrizione: "Proteine dietetiche in polvere con le migliori sostanze nutritive",
        prezzo: 9.99,
        bottone: "AGGIUNGI",
    },
    {
        url: "immagini/prodotti/proteina5.webp",
        titolo: "IMPACT WHEY ISOLATE",
        descrizione: "Integratore di siero del latte, con un contenuto di proteine del 90%",
        prezzo: 29.99,
        bottone: "AGGIUNGI",
    },
    {
        url: "immagini/prodotti/proteina 4.webp",
        titolo: "PROTEINE PURE",
        descrizione: "(Prima Impact Weight Gainer) Il modo perfetto per aumento massa",
        prezzo: 34.99,
        bottone: "AGGIUNGI",
    },
    {
        url: "immagini/prodotti/omega.webp",
        titolo: "OMEGA 3",
        descrizione: "Acidi grassi essenziali che sostengono la salute del cuore",
        prezzo: 10.99,
        bottone: "AGGIUNGI",
    },
    {
        url: "immagini/prodotti/omega.webp",
        titolo: "OMEGA 3",
        descrizione: "Acidi grassi essenziali che sostengono la salute del cuore",
        prezzo: 10.99,
        bottone: "AGGIUNGI",
    },
    {
        url: "immagini/prodotti/omega.webp",
        titolo: "OMEGA 3",
        descrizione: "Acidi grassi essenziali che sostengono la salute del cuore",
        prezzo: 10.99,
        bottone: "AGGIUNGI",
    },
 
   

]

prodotti.forEach((oggetto) => {
    creaCard(oggetto)
})

function creaCard(oggetto) {

    const colonna = document.createElement("div")
    colonna.className = "col-sm-3"

    const card = document.createElement("div")
    card.className = "card text-center mt-3"
    colonna.appendChild(card)

    const immagine = document.createElement("img")
    immagine.src = oggetto.url
    immagine.className = "card-img-top"
    card.appendChild(immagine)

    const body = document.createElement("div")
    body.className = "card-body"
    card.appendChild(body)

    const titolo = document.createElement("h5")
    titolo.className = "card-title"
    titolo.appendChild(document.createTextNode(oggetto.titolo))
    body.appendChild(titolo)

    const descrizione = document.createElement("p")
    descrizione.className = "card-text"
    descrizione.appendChild(document.createTextNode(oggetto.descrizione))
    body.appendChild(descrizione)

    const prezzo = document.createElement("h5")
    prezzo.className = "card-text"
    prezzo.appendChild(document.createTextNode(oggetto.prezzo + "€"))
    body.appendChild(prezzo)

    const aggiungi = document.createElement("button")
    aggiungi.className = "btn btn-primary"
    aggiungi.appendChild(document.createTextNode(oggetto.bottone))
    body.appendChild(aggiungi)


    document.getElementById("row").appendChild(colonna)



    function addCarrello() {
        const exampleModal = document.getElementById("modal2")

        const contenitore = document.createElement("div")
        contenitore.className = "container-sm d-inline-flex"
        exampleModal.appendChild(contenitore)

        const picture = document.createElement("img")
        picture.className = "img-thumbnail w-25 h-25 p-0"
        picture.src = oggetto.url
        contenitore.appendChild(picture)

        const div = document.createElement("div")
        div.className = "container-fluid"
        contenitore.appendChild(div)

        const titolo = document.createElement("h6")
        titolo.className = "h6"
        titolo.appendChild(document.createTextNode(oggetto.titolo))
        div.appendChild(titolo)

        const descrizione = document.createElement("p")
        descrizione.appendChild(document.createTextNode(oggetto.descrizione))
        div.appendChild(descrizione)

        const div2 = document.createElement("div")
        div2.className = "container-sm d-inline-flex justify-content-between align-items-end mb-4 mt-2"
        div.appendChild(div2)

        const div3 = document.createElement("div")
        div2.appendChild(div3)

        const span = document.createElement("span")
        span.appendChild(document.createTextNode("Quantità"))
        div3.appendChild(span)

        const bottone = document.createElement("button")
        bottone.type = "button"
        bottone.className = "btn btn-outline-primary btn-sm m-1"
        bottone.appendChild(document.createTextNode("-"))
        div3.appendChild(bottone)

        const bottone2 = document.createElement("button")
        bottone2.className = "btn btn-light btn-sm  m-0"
        
        bottone2.appendChild(document.createTextNode(1))
        div3.appendChild(bottone2)

        const bottone3 = document.createElement("button")
        bottone3.type = "button"
        bottone3.className = "btn btn-outline-primary btn-sm  m-1"
        bottone3.appendChild(document.createTextNode("+"))
        div3.appendChild(bottone3)

        const rimuovi = document.createElement("button")
        rimuovi.type = "button"
        rimuovi.className = "btn btn-outline-danger btn-sm  m-1"
        rimuovi.appendChild(document.createTextNode("RIMUOVI"))
        div3.appendChild(rimuovi)

        const div4 = document.createElement("div")
        div2.appendChild(div4)

        const h6 = document.createElement("h6")
        h6.innerHTML = oggetto.prezzo + "€"

        div4.appendChild(h6)



        //funzione aggiungi o togli prodotti
        let prova = 1;
        let numero = oggetto.prezzo



        bottone3.onclick = function aumenta() {
            prova++;

            bottone2.innerHTML = prova;
            h6.innerHTML = (numero* prova).toFixed(2) + "€"
            somma += oggetto.prezzo
            totOrdine.innerHTML = "Totale Ordine  " + somma.toFixed(2) + "€"
            carrello.innerHTML = somma.toFixed(2) + "€" + " &#128722;"
        }

        bottone.onclick = function togli() {

            if (prova == 1) {
                bottone2.innerHTML = prova;
            }
            else {
                prova--;
                bottone2.innerHTML = prova;
                h6.innerHTML = (numero* prova).toFixed(2) + "€"
                somma -= oggetto.prezzo
                totOrdine.innerHTML = "Totale Ordine  " + somma.toFixed(2) + "€"
                carrello.innerHTML = somma.toFixed(2) + "€" + " &#128722;"
            }
        }

        
     rimuovi.onclick=function rimuovi(){
        let togli=somma-=oggetto.prezzo*prova
        totOrdine.innerHTML = "Totale Ordine  " +togli.toFixed(2) + "€"
        carrello.innerHTML = +togli.toFixed(2) + "€"
        exampleModal.removeChild(contenitore)
        contatore=0;
     }


    }

    let contatore = 0
    //funzione bottone aggiungi
    aggiungi.onclick = function mostraTotale() {


        if (contatore == 0) {
            addCarrello()
            contatore++
            somma += oggetto.prezzo

            const carrello = document.getElementById("carrello");
            carrello.innerHTML = somma.toFixed(2) + "€" + " &#128722;"
            totOrdine.innerHTML = "Totale Ordine  " + somma.toFixed(2) + "€"

        }


    }

}
var somma = 0;

