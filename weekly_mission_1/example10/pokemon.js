// Crea un archivo pokemon.js, ahí crea la clase que necesitas para correr el archivo main.js. Deberás exportarla usando ESM.

// Necesitarás usar export default.
export default class Pokemon{
    // La clase tiene la misma implementación que el ejercicio anterior.

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

