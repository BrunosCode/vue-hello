// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

const app = new Vue (
    {
        el: "#root",
        data: {
            message: "Hello World",
            img: "img/vue.png"
        }
    }
);