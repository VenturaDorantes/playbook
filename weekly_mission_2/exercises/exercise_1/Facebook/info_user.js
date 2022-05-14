const user = {
    name: "Ventura DS",
    birthday: "18-Octubre-1999",
    friends: 236,
    photos: 15,
    age: 22,
    
    getNameAndBirthday: function(){
        return `El nombre del perfil es ${this.name} con fecha de cumpleaños ${this.birthday}`
    },

    getFriends: function(){
        return `El total de amigos es ${this.friends}`
    }
}

console.log(user.getNameAndBirthday())
console.log(user.getFriends())