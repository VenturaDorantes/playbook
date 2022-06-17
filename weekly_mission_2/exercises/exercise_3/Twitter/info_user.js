class User{
    constructor(name, username, bio){
        this.name = name
        this.username = username
        this.bio = bio

        this.following = 0
        this.followers = 0

        var today = new Date()
        this.dateJoined = today.getFullYear() + '-'
            + (today.getMonth() + 1)
            + '-' + today.getDate()
    }

    get getData(){
        return `Nombre: ${this.name} \nUsuario: @${this.username} \nSeguidores: ${this.followers} \nSiguiendo: ${this.following}`
    }

    set setFollowers(x){
        this.followers = x
    }

    set setFollowing(x){
        this.following = x
    }
}

user = new User('Ventura Dorantes', 'Ventura_DS16', 'LaunchX')

user.setFollowers = 27
user.setFollowing = 440

console.log(user.getData)

