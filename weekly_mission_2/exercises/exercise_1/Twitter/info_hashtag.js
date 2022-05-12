const hashtag = {
    title: "#FallGuys",
    username : "NotFallGuysGame",
    description: "En teoría mañana tendrá un gran anuncio. Se creen varias cosas: Fall Guys saldrá gratis y en las plataformas restantes (Xbox / Nintendo Switch) Un evento con una muy buena recompensa. Colaboración con Fortnite",
    publication_date: "8-Mayo-2022",

    getTitleUsernameAndDescription: function(){
        return `El ususario ${this.username} publico '${this.description}' con el hashtag ${this.title}`
    }
}

console.log("El titulo del hashtag es: " + hashtag.title )
console.log(hashtag.getTitleUsernameAndDescription())