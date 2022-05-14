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
console.log("1.- El nombre de cada explorer en la lista son:")

explorers.forEach(function(explorers){
    console.log(explorers.name)
})

// Imprime el stack de cada explorer, usa FOR EACH
console.log("\n2.- El Stack de cada explorer en la lista son: (forEach)")

explorers.forEach(function(explorers){
    console.log(explorers.name + " sus Stack son: " + explorers.stack)
})

// Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
console.log("\n3.- El Stack de cada explorer en la lista son: (MAP)")
const stacks = explorers.map(function(explorers){
    console.log(explorers.name + " sus Stack son: " + explorers.stack)
})

// Obtén la lista de explorers que tengan en su stack "js", usa FILTER 
// (para validar un elemento en un lista se usa el método includes)
console.log("\n4.- Los explorers con stack js son: ")
const stackJS = explorers.filter((stack) => 
    stack.stack.includes('js')
)

console.log(stackJS)

// Busca el primer explorer que sea de la CDMX, usa FIND
const explorerCDMX = explorers.find((cdmx) => 
    cdmx.city == "CDMX"
)

console.log("\n5.- El primer explorer que reside en CDMX es: " + explorerCDMX.name)

// Obtén la suma de todos los exercises_completed, usa REDUCE
const sum_completed = explorers.reduce((total , element) =>
    total + element.exercises_completed, 0
)

console.log("\n6.- Total de exercises_completed: " + sum_completed)

// Obtén la validación si al menos uno de los explorers 
// tiene la propiedad exercisesFinished en frontend como true, usa SOME

const SomeExercisesFinished = explorers.some((ef) =>
    ef.missions.frontend.isFinished === true
) 

console.log("\n7.- Validación exercisesFinished en frontend como true: " + SomeExercisesFinished)

// Obtén la validación si todos los explorers tienen la propiedad 
// isFinished del onboarding como true. Usa EVERY.

const EveryExercisesFinished = explorers.every((ef) =>
    ef.missions.onboarding.isFinished === true
)

console.log("\n8.- Validación exercisesFinished en onboarding como true: " + EveryExercisesFinished)