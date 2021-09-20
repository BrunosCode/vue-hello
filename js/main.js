// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

const app = new Vue (
    {
        el: "#root",
        data: {
            message: "Hello World",
            imgs: [ "img/vue.png", "img/nuxt.png" ],
            changingImg: "img/vue.png"
        },
        methods: {
            changeImg: function() {
                this.changingImg = (this.changingImg === this.imgs[0]) ? this.imgs[1] : this.imgs[0];
            }
        }
    }
);