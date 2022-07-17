const User = require('./../../app/models/User')


describe("Clase unitaria para la clase User de Twitter", () => {
    
    test('Creando objeto para User',() => {
        // Aquí invocas el código que vas a usar en tu app
        const user = new User(1, "venturadosa", "ventura", "Bio", "dateCreated", "lastUpdated")

        // Aquí validas los resultados de ese código
        // Esta es una comparación que va a igualar el valor de la izquierda
        // con el valor de la derecha (valor esperado)
        expect(user.id).toBe(1)
        expect(user.username).toBe("venturadosa")
        expect(user.name).toBe("ventura")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).toBe("dateCreated")
        expect(user.lastUpdated).toBe("lastUpdated")
    });
})