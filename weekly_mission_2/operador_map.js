//Ejemplo 4: Uso de map para recorrer los elementos de una lista y crear una nueva lista

// Arrow function and explict return
// const modifiedArray = arr.map((element, index) => element);

const numbers4 = [1, 2, 3, 4, 5]
const numbersSquare = numbers4.map(function(num){return num * num})
// Támbien puedes escribir la funcion como fat arrow
// const numbersSquare = numbers4.map((num) => {return num * num});
console.log("Ejemplo 4: Imprimiendo las lista de los elementos al cuadro")
console.log(numbersSquare)