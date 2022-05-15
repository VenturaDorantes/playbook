const biography = {
    user: "Ventura DS",
    gender: "Hombre",
    biography: "Hola estoy aprendiendo sobre NodeJS",
    live: "Estado de México",

    getUserAndBiography: function(){
        return `El usuario ${this.user} tiene como biografia ${this.biography}`
    },

    getUserAndLive: function(){
        return `El usuario ${this.user} vive en ${this.live}`
    }
}

console.log(biography.getUserAndBiography())
console.log(biography.getUserAndLive())