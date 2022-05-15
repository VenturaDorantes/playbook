class user {
    constructor(name, birthday, age){
        this.name = name
        this.birthday = birthday
        this.age = age
    }

    set setPhotos(photos){
        this.photos = photos
    }

    set setFriends(friends){
        this.friends = friends
    }

    get getNameAndBirthday(){
        return `El nombre del perfil es ${this.name} con fecha de cumpleaños ${this.birthday}`
    }

    get getFriendsAndPhotos(){
        return `Amigos: ${this.friends} \nFotos: ${this.photos}`
    }
}

const dataUser = new user("Ventura DS", "18-Octubre-1999", 22)

dataUser.photos = 15
dataUser.friends = 236

console.log(dataUser.getNameAndBirthday)
console.log(dataUser.getFriendsAndPhotos)