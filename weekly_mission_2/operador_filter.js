//Ejemplo 7: Uso de filter para filtrar una lista de elementos
const countries7 = ['Finlandia', 'Denmark', 'Sweden', 'Norway', 'Iceland']
const countriesContainingLand = countries7.filter((country) => //esta es la función
    country.includes('land') // indicación para solo filtrar elementos que incluyan "land"
)
console.log("Ejemplo 7: Uso de filter para filtrar una lista de elementos")
console.log(countriesContainingLand)
const countriesEndsByia = countries7.filter((country) => 
    country.endsWith('ia')
)
console.log("Ejemplo 7: Países que terminan en ia")
console.log(countriesEndsByia)