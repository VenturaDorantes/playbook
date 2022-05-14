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