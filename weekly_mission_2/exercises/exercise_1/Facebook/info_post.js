const post = {
    user: "Ventura DS",
    post: "Hola, Buen dia :)",
    date: "2-Mayo-2022",

    getPostAndDate: function(){
        return `La publicación de ${this.post} fue el día ${this.date}`
    },

    getUserAndDate: function(){
        return `El usuario ${this.user} hizo una publicación el día ${this.date}`
    }
}

console.log(post.getPostAndDate())
console.log(post.getUserAndDate())