class hashtag{
    
    constructor(hash){
        this.hash = hash
        this.tweets = 0
        this.category = ''
    }

    set setTweets(number){
        this.tweets = number
    }

    set setCategory(category){
        this.category = category
    }

    get getTweets(){
        return `Numero de Tweets: ${this.tweets}` 
    }

    get getData(){
        return `Hashtag: #${this.hash} Total de Tweets: ${this.tweets} Categoria: ${this.category}`
    }
}

class TT{
    
    constructor(){
        this.hashes = []
    }

    set addHash(hash){
        this.hashes.push(hash)
    }

    get getHashes(){
        return this.hashes
    }

    getTrendingTopic(element){
        return `#${element.hash} de ${element.category} tiene ${element.tweets} tweets`
    }

    printTrendingTopics(){
        this.hashes.forEach(function(element, index){
            console.log(`Trending topic ${index + 1}: `
            + trendingTopic.getTrendingTopic(element))
        })
    }
}

trendingTopic = new TT()

hash1 = new hashtag('LEEKNOWxSTAYSelca')
hash1.setTweets = 7649
hash1.setCategory = 'K-pop'
 
console.log(hash1.getData)
trendingTopic.addHash = hash1

hash2 = new hashtag('FelizJueves')
hash2.setTweets = 16200
hash2.setCategory = 'Tendencias'
trendingTopic.addHash = hash2

hash3 = new hashtag('Viñas')
hash3.setTweets = 6655
hash3.setCategory = 'Fútbol'
trendingTopic.addHash = hash3

trendingTopic.getHashes.forEach(function(element, index){
    console.log(`Trending topic ${index+1}: `
    + trendingTopic.getTrendingTopic(element))
})

