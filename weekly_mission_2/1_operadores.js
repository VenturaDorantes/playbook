//Ejemplo 1: for Each para imprimir elementos de una lista
const numbers = [1, 2, 3, 4, 5];
console.log("Ejemplo 1 : Imprimiendo los elementos de una lista")
numbers.forEach(num => console.log(num))

//Ejemplo 2: for Each para calcular la suma de todos los elementos de una lista
let sum = 0;
const numbers2 = [1, 2, 3, 4, 5];
numbers2.forEach(num => sum += num)
console.log("Ejemplo 2: Cálculo de la suma de los elementos de la lista")
console.log(sum)

//Ejemplo 3: for Each para imprimir los países en letras mayúsculas
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
console.log("Ejemplo 5: Imprimiendo la lista de la países en mayúsculas")
countries.forEach((element) => console.log(element.toUpperCase()))

//Ejemplo 4: Uso de map para recorrer los elementos de una lista y crear una nueva lista

// Arrow function and explict return
// const modifiedArray = arr.map((element, index) => element);

const numbers4 = [1, 2, 3, 4, 5]
const numbersSquare = numbers4.map(function(num){return num * num})
// Támbien puedes escribir la funcion como fat arrow
// const numbersSquare = numbers4.map((num) => {return num * num});
console.log("Ejemplo 4: Imprimiendo las lista de los elementos al cuadro")
console.log(numbersSquare)