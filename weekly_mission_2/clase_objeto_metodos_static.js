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

// HERENCIA: Nos permite relacionar clases entre sí y rehusar sus componentes