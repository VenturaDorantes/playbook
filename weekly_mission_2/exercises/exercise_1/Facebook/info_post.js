const post = {
    user: "Ventura DS",
    post: "Hola, Buen dia :)",
    date: "2-Mayo-2022",
    likes: 15,
    shares: 5,
    comments:[
        {
            user: "José de Jesus",
            comment: "Hola"
        },
        {
            user: "Edgar",
            comment: "Hola, que tal" 
        },
        {
            user: "Itzel",
            comment: "Hola c:"
        },
    ],

    getPostAndDate: function(){
        return `La publicación de ${this.post} fue el día ${this.date}`
    },

    getUserAndDate: function(){
        return `El usuario ${this.user} hizo una publicación el día ${this.date}`
    },

    getComments: function(){

        var TotalComments = ''
        this.comments.forEach((comment, number) =>
            {
                TotalComments += `\n Comentario #${number+1} `
                TotalComments += `${comment.user} : ${comment.comment}`
            }
        )

        return TotalComments
    }
}

console.log(post.getPostAndDate())
console.log(post.getUserAndDate())
console.log(post.getComments())