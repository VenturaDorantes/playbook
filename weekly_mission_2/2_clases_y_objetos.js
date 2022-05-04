// Ejemplo 1: Crear un clase vacía
class Person {

}
console.log("Ejemplo 1: Crear una clase vacía")
console.log(Person) // [class Person]

// Ejemplo 2: Crear un objeto a partir de una clase
class Pet {

}
const myPet1 = new Pet() // Puedo crear muchos objetos de la clase Pet
console.log("Ejemplo 2: Crear un objeto a partir de una clase")
console.log(myPet1) // Un objeto de la clase Pet

// Ejemplo 3: Instancias un objeto con atributos
class Student {
    // El constructor nos permite instanciar un objeto y asignarle atributos, this nos ayuda a realizar esto.
    constructor(name, age, subjects){
        this.name = name
        this.age= age
        this.subjects = subjects
    }
}

// Crear un objeto de la clase Student (esto se le llama instanciación)
const joseStudent = new Student ("Jose", 12, ["NodeJS","Python"])
console.log("Ejemplo 3: Instanciar un objeto con atributos")
console.log(joseStudent)

// Ejemplo 4: Métodos en los objetos
class Repository {
    constructor(name, author, language, stars){
        this.name = name
        this.author = author
        this.language = language
        this.stars = stars
    }

    getInfo(){ // es una función que ejecutará cualquier objeto instanciado de esta clase
        return `Repository ${this.name} has ${this.stars} stars`
    }
}
console.log("Ejemplo 4: Métodos en los objetos")
const myRepo = new Repository("LaunchX","VenturaDorantes","js",100)
console.log(myRepo.getInfo())

// Ejemplo 5: Atributos con valores por default
class PullRequest {
    constructor(repo, title, lines_changed){
        this.repo = repo
        this.title = title
        this.lines_changed = lines_changed
        this.status = "OPEN"
        this.dateCreated = new Date() // esto guardará la fecha actual en que se instancia el objeto
    }

    getInfo(){
        return `This PR is in the repo: ${this.repo}, ${this.title} (status: ${this.status}) and was created on ${this.dateCreated}`
    }
}

console.log("Ejemplo 5: Atributos con valores por default")
const myPR1 = new PullRequest("LaunchX","Mi Primer PR", 100)
console.log(myPR1.getInfo())

//Puedes instancias n cantidad de objetos de la misma clase
const myPR2 = new PullRequest("LaunchX", "Mi Segundo PR", 99)
console.log(myPR2.getInfo())

// Ejemplo 6: Getters para acceder a los atributos del objeto
class Ajolonauta {
    constructor(name, age, stack){
        this.name = name
        this.age = age
        this.stack = stack
        this.exercises_completed = 0
        this.exercises_todo = 99
    }

    get getExercisesCompleted(){
        return this.exercises_completed
    }
}

console.log("Ejemplo 6: Getters para acceder a los atributos del objeto")
const woopa = new Ajolonauta("Woopa", 1, [])
console.log(woopa.getExercisesCompleted)

// Ejemplo 7: Setters para modificar los atributos del objeto
class MissionCommander {
    constructor(name, mission){
        this.name = name
        this.mission = mission
        this.students = 0
        this.lives = 0
    }

    get getStudents(){
        return this.students
    }

    get getLives(){
        return this.lives
    }

    set setStudents(students){
        this.students = students
    }

    set setLives(lives){
        this.lives = lives
    }
}

console.log("Ejemplo 7: Setters para modificar los atributos del objeto")
const missionCommanderNode = new MissionCommander("Carlo", "NodeJS")

console.log(missionCommanderNode.getStudents) // 0 por default
console.log(missionCommanderNode.getLives) // 0 por default

// actualizamos los articulos por medio de los setters
missionCommanderNode.setStudents = 100
missionCommanderNode.setLives = 3

console.log(missionCommanderNode.getStudents) 
console.log(missionCommanderNode.getLives) 

// Ejemplo 8: Métodos static nos ayudan a escribir métodos en una clase que podemos usar sin necesidad de instanciar algún objeto
class Toolbox {
    static getMostUsefulTools(){
        return["Command line", "git", "Text Editor"]
    }
}

console.log("Ejemplo 8: Método static")
// Puede llamar el método static directamente con el nombre de la clase
console.log(Toolbox.getMostUsefulTools())
// si intentamos instanciar un objeto, no podremos llamar este método static
// const toolbox = new Toolbox()
// console.log(toolbox.getMostUsefulTools()) // no es una función

// HERENACIA: Nos permite relacionar clases entre sí y rehusar sus componentes