const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
]

// Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH
console.log("El nombre de cada explorer en la lista son:")

explorers.forEach(function(explorers){
    console.log(explorers.name)
})

// Imprime el stack de cada explorer, usa FOR EACH
console.log("\nEl Stack de cada explorer en la lista son: (forEach)")

explorers.forEach(function(explorers){
    console.log(explorers.name + " sus Stack son: " + explorers.stack)
})

// Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
console.log("\nEl Stack de cada explorer en la lista son: (MAP)")
const stacks = explorers.map(function(explorers){
    console.log(explorers.name + " sus Stack son: " + explorers.stack)
})

// Obtén la lista de explorers que tengan en su stack "js", usa FILTER 
// (para validar un elemento en un lista se usa el método includes)
console.log("\nLos explorers con stack js son: ")
const stackJS = explorers.filter((stack) => 
    stack.stack.includes('js')
)

console.log(stackJS)

// Busca el primer explorer que sea de la CDMX, usa FIND
const explorerCDMX = explorers.find((cdmx) => 
    cdmx.city == "CDMX"
)

console.log("\nEl primer explorer que reside en CDMX es: " + explorerCDMX.name)