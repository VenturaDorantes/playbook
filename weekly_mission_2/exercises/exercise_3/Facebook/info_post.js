class post {
    constructor(user, post, date){
        this.user = user
        this.post = post
        this.date = date

        this.commentCount
        this.comments = []
    }

    addComment(user, comment){
        this.commentCount++
        this.comments.push({user, comment})
    }

    set setLikes(likes){
        this.likes = likes 
    }

    set setShare(shares){
        this.shares = shares
    }

    get getPostAndDate(){
        return `La publicación de ${this.post} fue el día ${this.date}`
    }

    get getUserAndDate(){
        return `El usuario ${this.user} hizo una publicación el día ${this.date}`
    }

    get getComments(){
        var TotalComments = ''
        this.comments.forEach((comment, number) =>
            {
                TotalComments += `\n Comentario #${number+1} `
                TotalComments += `${comment.user} : ${comment.comment}`
            }
        )

        return TotalComments
    }

    get getLikesAndShares(){
        return `Likes: ${this.likes}, Shares: ${this.shares}`
    }
}

const dataPost = new post("Ventura DS", "Hola, Buen dia :)", "2-Mayo-2022")

dataPost.likes = 15
dataPost.shares = 5

dataPost.addComment("José de Jesus", "Hola")
dataPost.addComment("Edgar", "Hola, que tal")
dataPost.addComment("Itzel", "Hola c:")

console.log(dataPost.getPostAndDate)
console.log(dataPost.getUserAndDate)
console.log(dataPost.getComments)
console.log(dataPost.getLikesAndShares)