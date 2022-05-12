const twitter_user = {
    name: "VenturaDorantes",
    username: "Ventura_Dorantes_16",
    birthday: "18-octubre-1999",
    age: 22,
    registration_day: "Marzo-2016",
    biography: "Hola",
    following: 440,
    followers: 27,  

    getUsernameAndBiography: function(){
        return `La biografia del usuario ${this.username} es ${this.biography}`
    },

    getUsernameFollowingAndFollowers: function(){
        return `Usuario: ${this.username} \nSiguiendo: ${this.following} \nSeguidores: ${this.followers}`
    }
}

console.log("Nombre del usuario: " + twitter_user.name)
console.log("Nombre de usuario: " + twitter_user.username)
console.log(twitter_user.getUsernameAndBiography()) 
console.log(twitter_user.getUsernameFollowingAndFollowers()) 