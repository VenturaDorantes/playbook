class Spiderman{
    constructor(name, age, actor, movies, studio){
        this.name = name
        this.age = age
        this.actor = actor
        this.movies = movies
        this.studio = studio
    }

    get getInfo(){
        return `Hola soy tu amigable vecino ${this.name}, interpretado por ${this.actor} de ${this.age} años, con ${this.movies} en total para el estudio de ${this.studio}`
    }
}