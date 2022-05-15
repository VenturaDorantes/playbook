class bio {
    constructor(user, gender, bio, live){
        this.user = user
        this.gender = gender
        this.bio = bio
        this.live = live
    }

    get getUserAndBio(){
        return `El usuario ${this.user} tiene como biografia ${this.bio}`
    }

    get getUserAndLive(){
        return `El usuario ${this.user} vive en ${this.live}`
    }
}

const dataBiography = new bio("Ventura DS", "Hombre", "Hola estoy aprendiendo sobre NodeJS", "Estado de México")

console.log(dataBiography.getUserAndBio)
console.log(dataBiography.getUserAndLive)