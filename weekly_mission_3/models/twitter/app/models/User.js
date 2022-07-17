class User {
    // constructor(id, username, name, bio, dateCreated, lastUpdated){
    constructor(id, username, name, bio){
        this.id = id
        this.username = username
        this.name = name
        this.bio = bio
        this.dateCreated = new Date() // Agregando comando para tomar la fecha actual
        this.lastUpdated = new Date()
    }
}

module.exports = User