// Crea una clase Pokemon, exportala usando CommonJS, de tal forma que pueda usarse como se indica previamente.
// Crea la clase.

class Pokemon{

    // Crea un constructor que permita recibir un nombre.
    constructor(name){
        this.name = name
    }

    // Crea la función sayHello().
    sayHello(){
        console.log(`Mi pokemon ${this.name} te saluda!!!`)
    }

    // Crea la función sayMessage().
    sayMessage(msg){
        console.log(`Mi pokemon ${this.name} dice: ${msg}`)
    }
}

// Exporta la clase para que pueda ser importada en el archivo main.js.
module.exports = Pokemon