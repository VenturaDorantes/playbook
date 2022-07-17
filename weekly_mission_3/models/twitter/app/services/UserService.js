const User = require('./../models/User')

class UserService {
    static create(id, username, name){
        return new User(id, username, name, "Sin Bio")
    }

    static getInfo(user){
        var info = []

        info.push(user.id)
        info.push(user.username)
        info.push(user.name)
        info.push(user.bio)

        return info
    }
}

module.exports = UserService