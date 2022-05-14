const biography = {
    user: "Ventura DS",
    biography: "Hola estoy aprendiendo sobre NodeJS",

    getUserAndBiography: function(){
        return `El usuario ${this.user} tiene como biografia ${this.biography}`
    }
}

console.log(biography.getUserAndBiography())