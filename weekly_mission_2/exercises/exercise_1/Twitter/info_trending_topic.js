const trending = {
    place: "México",
    trendings: {
        number_1: {
            title : "#LEEKNOWxSTAYSelca",
            tweets : 7649,
            category : "K-pop"
        },

        number_2: {
            title : "#FelizJueves",
            tweets : 16200,
            category : "Tendencias"
        },

        number_3: {
            title : "#SalarioRosaVePorMas",
            tweets : 4529,
            category : "Tendecias"
        },

        number_4: {
            title : "#StrayKids",
            tweets : 280000,
            category : "K-pop"
        },

        number_5: {
            title : "#Viñas",
            tweets : 6655,
            category : "Fútbol"
        },
    },

    getTrendingNumber_1: function(){
        return `El numero 1 en trendings topic es ${this.trendings.number_1.title} con ${this.trendings.number_1.tweets} tweets`
    },

    getTrendingNumber_5: function(){
        return `El numero 5 en trendings topic es ${this.trendings.number_5.title} con ${this.trendings.number_5.tweets} tweets`
    } 
}

console.log("El lugar de los trending topic es en: " + trending.place)
console.log(trending.trendings.number_1.title)
console.log(trending.getTrendingNumber_1())
console.log(trending.getTrendingNumber_5())
