const Spiderman = require('./../app/Spiderman')

describe("Prueba de unidad para la clase Spiderman", () => {
    test('1) Creando objeto para spiderman', () => {
        // Aquí escribimos el código que queremos usar tal cuál
        // Quiero poder instanciar un objeto Spiderman con esta información
        const andrewGarfield = new Spiderman("Spiderman Sony", 31, "Andrew Garfield", 2, "Sony")

        // Validamos que este código funcione de la forma esperada

        expect(andrewGarfield.name).toBe("Spiderman Sony")
        expect(andrewGarfield.age).toBe(31)
        expect(andrewGarfield.actor).toBe("Andrew Garfield")
        expect(andrewGarfield.movies).toBe(2)
        expect(andrewGarfield.studio).toBe("Sony")
    });

    test('2) Creando objeto 2 para spiderman', () => {
        const tomHolland = new Spiderman("Spiderman Marvel", 25, "Tom Holland", 5, "Marvel")

        expect(tomHolland.getInfo).toBe("Hey, I'm Tom Holland from Marvel studio")
    });
})